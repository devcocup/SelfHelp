// React
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { SecurityQuestions, Margins, Paddings, FontSizes, Colors, BorderRadii } = Constants

const ResetButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.resetButton, AppStyles.center]}>
                <Text style={styles.buttonText}>Erase Data + Reset Pin</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class AnswerSecurityQuestionScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            storedAnswer: '',
            securityQuestion: '',
            securityAnswer: '',
            answerCorrect: false,
            instructionHeaderText: 'Answer your Security Question to reset your pin'
        }

        this.runSQL()
    }

    runSQL() {
    const db = SQLite.openDatabase({name: 'securityDB', createFromLocation: '/data/securityDB.sqlite'})
    db.transaction((txn) => {
        txn.executeSql('CREATE TABLE IF NOT EXISTS Security(id INTEGER PRIMARY KEY NOT NULL, pin_number VARCHAR(6), security_question VARCHAR(100), security_answer VARCHAR(200))')
        txn.executeSql('SELECT * FROM `security`', [], (tx, res) => {
            let tempSecurity = []
            for (let i = 0; i < res.rows.length; ++i) {
                tempSecurity.push(res.rows.item(i))
            }
            if (tempSecurity.length > 0) {
                this.setState({
                    securityQuestion: tempSecurity[0].security_question,
                    storedAnswer: tempSecurity[0].security_answer
                })
            }
        })
    })
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    onSubmit = (navigation) => {
        const { storedAnswer, securityAnswer } = this.state

        if (storedAnswer === securityAnswer) {
            localStorage.removeItem('PIN')
            const db = SQLite.openDatabase({name: 'securityDB', createFromLocation: '/data/securityDB.sqlite'})
            db.transaction((txn) => {
                txn.executeSql('DROP TABLE IF EXISTS Security', [])
                txn.executeSql('CREATE TABLE IF NOT EXISTS Security(id INTEGER PRIMARY KEY NOT NULL, pin_number VARCHAR(6), security_question VARCHAR(100), security_answer VARCHAR(200))')
            })
            this.goToScreen('CreateSecurityPinScreen', {}, navigation)
        } else {
            this.setState({
                instructionHeaderText: 'Your answer was incorrect, please try again'
            })
        }
    }

    onReset = (navigation) => {
        const journalsDb = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
        journalsDb.transaction((txn) => {            
            txn.executeSql('DROP TABLE IF EXISTS Journals', [])
        })
        const plansDb = SQLite.openDatabase({name: 'plansDB', createFromLocation: '/data/plansDB.sqlite'})
        plansDb.transaction((txn) => {
            txn.executeSql('DROP TABLE IF EXISTS Plans', [])
        })
        this.goToScreen('ResetConfirmScreen', navigation)
    }

    render() {
        const { navigation } = this.props
        const { securityQuestion, securityAnswer, instructionHeaderText } = this.state
        // const questionText = 'What street did you grow up on?'

        return (
            <KeyboardAvoidingView
                style={AppStyles.mainContainer}
                behavior='padding'
            >
                <SecurityPinHeader
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>
                            {instructionHeaderText}
                        </Text>
                    </View>
                    <View style={styles.questionArea}>
                        <Text style={styles.title}>Question:</Text>
                        <View style={AppStyles.center}>
                            <Text style={styles.question}>{securityQuestion}</Text>
                        </View>
                    </View>
                    <View style={styles.answerArea}>
                        <Text style={styles.title}>Answer:</Text>
                        <View style={[styles.answerBox, AppStyles.vCenter]}>
                            <TextInput
                                style={styles.inputBox}
                                placeholder=''
                                underlineColorAndroid='rgba(0,0,0,0)'
                                onChangeText={(securityAnswer) => this.setState({ securityAnswer })}
                                value={securityAnswer}
                            />
                        </View>
                    </View>
                    <View style={[styles.buttonArea, AppStyles.hCenter]}>
                        <Button
                            label='Submit'
                            bgColor='white'
                            onPress={() => this.onSubmit(navigation)}
                        />
                    </View>
                    <View style={AppStyles.hCenter}>
                        <ResetButton
                            onPress={() => this.onReset(navigation)}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    titleArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.elementP,
        paddingHorizontal: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    title: {
        color: 'white',
        fontSize: FontSizes.textHeaderFS,
        fontWeight: '600',
        textAlign: 'center'
    },

    questionArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.elementP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    question: {
        height: 40,
        paddingBottom: Paddings.elementP,
        marginTop: Margins.elementMT,
        color: 'white',
        fontSize: FontSizes.textContentFS
    },

    answerArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.elementP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    answerBox: {
        height: 40,
        backgroundColor: 'white',
        opacity: .95,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.elementMT
    },

    inputBox: {
        height: 40,
        width: width - 2 * Margins.containerM,
        borderRadius: BorderRadii.boxBR,
        backgroundColor: 'white',
        opacity: .95,
        textAlign: 'center'
    },

    buttonArea: {
        paddingTop: Paddings.elementP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    resetButton: {
        width: width - 40,
        borderRadius: BorderRadii.buttonBR,
        backgroundColor: Colors.red,
        marginTop: Margins.elementMT
    },

    buttonText: {
        color: 'white',
        fontSize: FontSizes.textHeaderFS,
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold',
        marginVertical: Margins.xlM
    }
})
