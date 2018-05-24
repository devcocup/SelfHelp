// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import SQLite from 'react-native-sqlite-2'
import { encrypt, decrypt } from 'react-native-simple-encryption'
import Swipeable from 'react-native-swipeable'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalCard from '../Components/JournalCard'

const { AppKey, FontSizes, Paddings } = Constants
const headerTitle = 'Edit Journal'


export default class JournalHistoryScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            journalItems: [],
            isJournalEmpty: true
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        const { params } = navigation.state
        const { question } = params

        this.runSQL(question)
    }

    runSQL(question) {
        const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
        db.transaction((txn) => {
            txn.executeSql(`SELECT * FROM journals where journal_question = "${encrypt(AppKey, question)}"`, [], (tx, res) => {
                let tempJournals = []
                for (let i = 0; i < res.rows.length; ++i) {
                    tempJournals.push(res.rows.item(i))
                }
                if (tempJournals.length > 0) {
                    this.setState({
                        isJournalEmpty: false
                    })
                }
                this.setState({
                    journalItems: tempJournals
                })
            })
        })
    }

    isUpdated = (flag = false) => {
        if (flag) {
            this.runSQL(this.props.navigation.state.params.question)
        }
    }

    editJournalHistory = (journalHistory) => {
        const { navigation } = this.props
        const { navigate, goBack } = navigation
        const journalDate = decrypt(AppKey, journalHistory.journal_date)
        const headerContent = decrypt(AppKey, journalHistory.journal_question)
        const journalAnswer = decrypt(AppKey, journalHistory.journal_answer)
        navigate('CurrentJournalPromptScreen', { headerTitle, headerContent, journalAnswer, journalDate, isUpdated: this.isUpdated })
        this.swipeable.recenter()
    }

    deleteJournalHistory = (journalHistory) => {
        const { navigation } = this.props
        const { navigate, goBack } = navigation
        const question = decrypt(AppKey, journalHistory.journal_question)
        const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
        db.transaction((txn) => {
            txn.executeSql(`DELETE FROM journals where journal_question = "${journalHistory.journal_question}" AND journal_date = "${journalHistory.journal_date}"`, [], (tx, res) => {
                console.log(res);
            })
        })
        this.swipeable.recenter()
        navigate('JournalScreen', { updated: true })
    }

    render() {
        const { navigation } = this.props
        const { journalItems, isJournalEmpty } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView style={{flex: 1}}>
                {
                    journalItems.map((item, index) => {
                        let rightButtons = [
                            <TouchableOpacity style={{flex: 1}} onPress={() => this.editJournalHistory(item)}><Text style={[styles.editButton, styles.text]}>Edit</Text></TouchableOpacity>,
                            <TouchableOpacity style={{flex: 1}} onPress={() => this.deleteJournalHistory(item)}><Text style={[styles.deleteButton, styles.text]}>Delete</Text></TouchableOpacity>
                        ]

                        return (
                            <Swipeable
                                onRef={ref => this.swipeable = ref}
                                key={index}
                                rightButtonWidth={75}
                                rightButtons={rightButtons}
                            >
                                <View style={[styles.cardContainer, AppStyles.hCenter]}>
                                    <JournalCard
                                        content={item}
                                    />
                                </View>
                            </Swipeable>
                        )
                    })                    
                }
                {
                    isJournalEmpty &&
                    <View style={[styles.container, AppStyles.center]}>
                        <Text style={styles.text}>Empty Journals</Text>
                    </View>
                }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Paddings.containerP
    },

    text: {
        color: 'white',
        fontSize: FontSizes.topicFS
    },

    editButton: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 10,
        backgroundColor: 'blue',
    },

    deleteButton: {
        flex: 1,
        backgroundColor: 'red',
        paddingLeft: 10,
        paddingTop: 10,
    }

})
