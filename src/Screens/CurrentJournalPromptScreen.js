// React
import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalHeadCard from '../Components/JournalHeadCard'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { Paddings, Margins, BorderRadii } = Constants


export default class CurrentJournalPromptScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            journalText: 'I am feeling good.',
            progress: []
        }
    }


    runSQL(currentTime, journalQuestion, journalAnswer) {
        const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
        db.transaction((txn) => {
            txn.executeSql('DROP TABLE IF EXISTS Journals', [])
            txn.executeSql('CREATE TABLE IF NOT EXISTS Journals(journal_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, journal_date VARCHAR(30), journal_question VARCHAR(100), journal_answer VARCHAR(200))')
            txn.executeSql(`INSERT INTO Journals (journal_date, journal_question, journal_answer) VALUES("${currentTime}", "${journalQuestion}", "${journalAnswer}")`, [])
        })
    }

    onDone = (navigation) => {
        const { journalText } = this.state
        const { navigate, state } = navigation
        const { params } = state
        const { headerContent } = params
        const currentTime = new Date().toLocaleString()
        this.runSQL(currentTime, headerContent, journalText)
        navigate('JournalScreen')
    }

    render() {
        const { navigation } = this.props
        const { headerTitle, headerContent } = navigation.state.params

        return (
            <KeyboardAvoidingView style={AppStyles.mainContainer}>
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
                                    style={styles.inputBox}
                                    multiline={true}
                                    onChangeText={(journalText) => this.setState({ journalText })}
                                    value={this.state.journalText}
                                />
                            </View>
                            <View style={styles.buttonArea}>
                                <Button
                                    label='Done'
                                    bgColor='white'
                                    onPress={() => this.onDone(navigation)}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        height: height - 340,
        padding: Paddings.elementP
    },

    buttonArea: {
        flex: .2,
        width: width - 40,
        marginTop: Margins.containerM
    }
})
