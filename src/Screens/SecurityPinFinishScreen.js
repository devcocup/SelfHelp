// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import localStorage from 'react-native-sync-localstorage'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, Colors, BorderRadii } = Constants


export default class SecurityPinFinishScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    runSQL(pinNumber, securityQuestion, securityAnswer) {
        const db = SQLite.openDatabase({name: 'securityDB', createFromLocation: '/data/securityDB.sqlite'})
        db.transaction((txn) => {
            txn.executeSql('DROP TABLE IF EXISTS Security', [])
            txn.executeSql('CREATE TABLE IF NOT EXISTS Security(id INTEGER PRIMARY KEY NOT NULL, pin_number VARCHAR(6), security_question VARCHAR(100), security_answer VARCHAR(200))')
            txn.executeSql(`INSERT INTO Security (pin_number, security_question, security_answer) VALUES("${pinNumber}", "${securityQuestion}", "${securityAnswer}")`, [])
        })
    }

    onDoneClicked = (navigation) => {
        const { params } = navigation.state
        const { securityQuestion, securityAnswer } = params
        const pinNumber = localStorage.getItem('PIN')
        this.runSQL(pinNumber, securityQuestion, securityAnswer)
        this.goToScreen('JournalScreen', navigation)
    }

    render() {
        const { navigation } = this.props
        const pinNumber = localStorage.getItem('PIN')
        const descriptionHeaderText = 'Write it down in a safe place'
        const descriptionContentText = 'If you can\'t remember your pin, then you can reset it by answering your security question. If you cannot remember your security question answer or your pin, then you have the option to reset your pin, but all your data on this app will be erased.'

        return (
            <View style={AppStyles.mainContainer}>
                <SecurityPinHeader
                    headerType='FLOW'
                    flowIndex={5}
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={AppStyles.hCenter}>
                        <View style={styles.statusArea}>
                            <Text style={styles.headerText}>All done!</Text>
                        </View>
                        <View style={styles.pinNumberArea}>
                            <Text style={styles.headerText}>Your pin is:</Text>
                            <View style={styles.pinNumberBox}>
                                <Text style={styles.headerText}>{pinNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.descriptionArea}>
                            <Text style={styles.headerText}>{descriptionHeaderText}</Text>
                            <Text style={styles.contentText}>{descriptionContentText}</Text>
                        </View>
                        <View>
                            <Button
                                label='Done'
                                bgColor='white'
                                onPress={() => this.onDoneClicked(navigation)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusArea: {
        paddingVertical: Paddings.containerP
    },

    headerText: {
        color: 'white',
        fontSize: FontSizes.pinHeaderFS,
        fontWeight: '600',
        textAlign: 'center'
    },

    pinNumberArea: {
        paddingVertical: Paddings.containerP
    },

    pinNumberBox: {
        backgroundColor: Colors.orange,
        marginTop: Margins.elementMT,
        padding: Paddings.elementP,
        borderRadius: BorderRadii.boxBR
    },

    descriptionArea: {
        paddingTop: Paddings.lP
    },

    contentText: {
        color: 'white',
        fontSize: FontSizes.pinContentFS,
        paddingHorizontal: Paddings.lP,
        marginVertical: Margins.containerM
    }
})
