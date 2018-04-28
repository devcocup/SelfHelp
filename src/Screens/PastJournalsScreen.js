// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import SQLite from 'react-native-sqlite-2'
import { encrypt } from 'react-native-simple-encryption'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalTitleListItem from '../Components/JournalTitleListItem'

const { AppKey, JournalPromptQuestions } = Constants

const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})

const onListClick = (item, index, navigation) => {
    const { navigate } = navigation
    navigate('JournalHistoryScreen', { question: item })
}


export default class PastJournalsScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            checkedStates: [],
            isFirstInstalled: true
        }
    }

    componentWillMount() {
        this.runSQLVersionCheck()
    }

    runSQLVersionCheck() {
        const versionDb = SQLite.openDatabase({name: 'appVerDB', createFromLocation: '/data/appVerDB.sqlite'})
        versionDb.transaction((txn) => {
            txn.executeSql('CREATE TABLE IF NOT EXISTS Version(id INTEGER PRIMARY KEY NOT NULL, installed BOOLEAN )')
            txn.executeSql('SELECT * FROM Version', [], (tx, res) => {
                let tempVersion = []
                for (let i = 0; i < res.rows.length; ++i) {
                    tempVersion.push(res.rows.item(i))
                }
                if (tempVersion.length > 0) {
                    this.setState({
                        isFirstInstalled: false
                    })
                } else {
                    this.emptyJournalDB()
                }
            })
            txn.executeSql(`INSERT INTO Version (installed) VALUES("TRUE")`, [])
        })
    }

    emptyJournalDB() {
        db.transaction((txn) => {
            txn.executeSql('DROP TABLE IF EXISTS Journals', [])
            txn.executeSql('CREATE TABLE IF NOT EXISTS Journals(journal_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, journal_date VARCHAR(30), journal_question VARCHAR(100), journal_answer VARCHAR(200))')
        })   
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <View>
                    {
                        JournalPromptQuestions.map((item, index) => {
                            let checked = false
                            
                            db.transaction((txn) => {
                                txn.executeSql(`SELECT * FROM journals where journal_question = "${encrypt(AppKey, item)}"`, [], (tx, res) => {
                                    let tempJournals = []
                                    for (let i = 0; i < res.rows.length; ++i) {
                                        tempJournals.push(res.rows.item(i))
                                    }
                                    if (tempJournals.length > 0) {
                                        const tempStates = this.state.checkedStates
                                        tempStates[index] = true
                                        this.setState({
                                            checkedStates: tempStates
                                        })
                                    }
                                })
                            })

                            return (
                                <View key={index}>
                                    <JournalTitleListItem
                                        checked={this.state.checkedStates[index]}
                                        label={item}
                                        onPress={() => onListClick(item, index, navigation)}
                                    />
                                </View>
                            )
                        })
                    }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
