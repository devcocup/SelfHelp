// React
import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet, Dimensions, Keyboard } from 'react-native'
import SQLite from 'react-native-sqlite-2'
import { encrypt } from 'react-native-simple-encryption'
// import Aes from 'react-native-aes-crypto'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalHeadCard from '../Components/JournalHeadCard'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { AppKey, Paddings, Margins, BorderRadii } = Constants

// const generateKey = (password, salt) => Aes.pbkdf2(password, salt)

// const encrypt = (text, keyBase64) => {
//     let ivBase64 = 'base64 random 16 bytes string'
//     return Aes.encrypt(text, keyBase64, ivBase64).then(cipher => ({ cipher, iv: ivBase64 }))
// }

// const decrypt = (encryptedData, key) => Aes.decrypt(encryptedData.cipher, key, encryptedData.iv)


export default class CurrentJournalPromptScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            journalText: '',
            progress: [],
            visibleHeight: height - 340,
            placeholderText: 'Test placeholder here...'
        }
    }


    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardDidShow (e) {
        let newSize = height - 340 - e.endCoordinates.height

        this.setState({
            visibleHeight: newSize,
            topLogo: { width: 100, height: 70 }
        })
    }
  
    keyboardDidHide (e) {
        this.setState({
            visibleHeight: height - 340,
            topLogo: { width: width}
        })
    } 

    runSQL(currentTime, journalQuestion, journalAnswer) {
        const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
        const encryptedTime = encrypt(AppKey, currentTime)
        const encryptedQuestion = encrypt(AppKey, journalQuestion)
        const encryptedAnswer = encrypt(AppKey, journalAnswer)

        db.transaction((txn) => {
            // txn.executeSql('DROP TABLE IF EXISTS Journals', [])
            txn.executeSql('CREATE TABLE IF NOT EXISTS Journals(journal_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, journal_date VARCHAR(30), journal_question VARCHAR(100), journal_answer VARCHAR(200))')
            txn.executeSql(`INSERT INTO Journals (journal_date, journal_question, journal_answer) VALUES("${encryptedTime}", "${encryptedQuestion}", "${encryptedAnswer}")`, [])
        })
    }

    onDone = (navigation) => {
        const { journalText } = this.state
        const { navigate, state } = navigation
        const { params } = state
        const { headerContent } = params
        const currentTime = new Date().toLocaleString()
        this.runSQL(currentTime, headerContent, journalText)
        navigate('JournalScreen', { updated: true })
    }

    render() {
        const { navigation, placeholder } = this.props
        const { headerTitle, headerContent } = navigation.state.params

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={AppStyles.hCenter}>
                        <JournalHeadCard
                            topic={headerTitle}
                            content={headerContent}
                        />
                        <View style={[styles.answerArea, AppStyles.hCenter]}>
                            <View style={styles.textArea}>
                                <TextInput
                                    style={[styles.inputBox, { height: this.state.visibleHeight}]}
                                    placeholder={placeholder ? placeholder : "You may answer the prompt, or leave it empty and click 'Done' to skip it for now ..."}
                                    multiline={true}
                                    blurOnSubmit={true}
                                    onChangeText={(journalText) => this.setState({ journalText })}
                                    value={this.state.journalText}
                                />
                            </View>
                            <View style={[styles.buttonArea, AppStyles.hCenter]}>
                                <Button
                                    label='Done'
                                    bgColor='white'
                                    onPress={() => this.onDone(navigation)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    answerArea: {
        flex: 1,
        padding: Paddings.containerP
    },

    textArea: {
        flex: .8,
        width: width - 40,
        backgroundColor: 'white',
        borderRadius: BorderRadii.boxBR
    },

    inputBox: {
        // height: height - 340,
        padding: Paddings.elementP
    },

    buttonArea: {
        flex: .2,
        width: width - 40,
        marginTop: Margins.containerM
    }
})
