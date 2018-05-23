// React
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import JournalHeadCard from '../Components/JournalHeadCard'
import CardWithImage from '../Components/CardWithImage'

const JournalIcon = require('../Assets/Images/journal_orange.png')
const AnswerJournalIcon = require('../Assets/Images/answer_journal.png')
const BrowseJournalIcon = require('../Assets/Images/browse_journal.png')

const { height, width } = Dimensions.get('window')
const { JournalPromptQuestions } = Constants

const db = SQLite.openDatabase({name: 'journalPromptDB', createFromLocation: '/data/journalPromptDB.sqlite'})
const cardHeadTitle = 'Current Journal Prompt'

const goToScreen = (ScreenName, headerTitle, headerContent, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName, { headerTitle, headerContent })
}

const onCurrentJournal = (navigation, headerTitle, headerContent) => {
    goToScreen('CurrentJournalPromptScreen', headerTitle, headerContent, navigation)
}

const onBrowseJournal = (navigation) => {
    goToScreen('PastJournalsScreen', '', '', navigation)
}

const CardContainer = ({ navigation }) => {
    const cardContentText = JournalPromptQuestions[getRandomInt(9)]

    return (
        <View style={AppStyles.hCenter}>
            <JournalHeadCard
                topic={cardHeadTitle}
                content={cardContentText}
            />
            <CardWithImage
                cardImage={AnswerJournalIcon}
                text='Answer Current Journal'
                onPress={() => onCurrentJournal(navigation, cardHeadTitle, cardContentText)}
            />
            <CardWithImage
                cardImage={BrowseJournalIcon}
                text='Browse All Journals'
                onPress={() => onBrowseJournal(navigation)}
            />
        </View>
    )
}


export default class JournalScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            answeredItems: [],
            promptDate: new Date()
        }
    }

    componentWillMount() {
        const { navigation } = this.props
        const { state } = navigation
        const { params } = state
        const { promptDate } = this.state
        let isUpdated = (params && params.updated) ? params.updated : false
        this.getPromptDateSQL()

        const currentTime = new Date()
        const timeDiff = Math.abs(promptDate - currentTime)
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) 
        if (diffDays >= 7) {
            isUpdated = true
        }

        if (isUpdated) {
            this.setState({
                promptOrder: this.state.promptOrder + 1
            })
            this.storePromptDateSQL()
        }
    }

    getPromptDateSQL() {
        db.transaction((txn) => {
            txn.executeSql('SELECT * FROM `PromptDates`', [], (tx, res) => {
                let tempDates = []
                for (let i = 0; i < res.rows.length; ++i) {
                    tempDates.push(res.rows.item(i))
                }
                if (tempDates.length > 0) {
                    this.setState({
                        promptDate: tempDates[0].prompt_date,
                        promptOrder: tempDates[0].prompt_order
                    })
                }
            })
        })
    }

    storePromptDateSQL() {
        const { promptDate, promptOrder } = this.state
        const currentTime = new Date()
        const promptTime = promptDate ? promptDate : currentTime
        const promptIndex = promptOrder ? promptOrder : 0

        this.setState({
            promptOrder: promptIndex
        })

        db.transaction((txn) => {
            txn.executeSql('DROP TABLE IF EXISTS Promptdates', [])
            txn.executeSql('CREATE TABLE IF NOT EXISTS Promptdates(prompt_id INTEGER PRIMARY KEY NOT NULL, prompt_date DATETIME, prompt_order INTEGER)')
            txn.executeSql(`INSERT INTO Promptdates (prompt_date, prompt_order) VALUES("${promptTime}", "${promptIndex}")`, [])
        })
    }

    // runSQL() {
    //     const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
    //     db.transaction((txn) => {
    //         txn.executeSql('SELECT * FROM journals', [], (tx, res) => {
    //             let tempJournals = []
    //             for (let i = 0; i < res.rows.length; ++i) {
    //                 tempJournals.push(res.rows.item(i))
    //             }
    //             if (tempJournals.length > 0) {
    //                 this.setState({
    //                     answeredItems: tempJournals
    //                 })
    //             }
    //         })
    //     })
    // }

    getRandomInt = (max) => {
        // const { answeredItems } = this.state
        // return answeredItems.length
        return Math.floor(Math.random() * Math.floor(max))
    }

    render() {
        const { navigation } = this.props
        const cardContentText = JournalPromptQuestions[this.getRandomInt(9)]
        
        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <HeadingContainer
                            headingImage={JournalIcon}
                            headingText='Journal'
                        />
                        {/*<CardContainer
                            navigation={navigation}
                        />*/}
                        <View style={AppStyles.hCenter}>
                            <JournalHeadCard
                                topic={cardHeadTitle}
                                content={cardContentText}
                            />
                            <CardWithImage
                                cardImage={AnswerJournalIcon}
                                text='Answer Current Journal'
                                onPress={() => onCurrentJournal(navigation, cardHeadTitle, cardContentText)}
                            />
                            <CardWithImage
                                cardImage={BrowseJournalIcon}
                                text='Browse All Journals'
                                onPress={() => onBrowseJournal(navigation)}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
