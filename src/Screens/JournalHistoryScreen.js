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
import JournalCard from '../Components/JournalCard'

const { AppKey, FontSizes, Paddings } = Constants


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

    render() {
        const { navigation } = this.props
        const { journalItems, isJournalEmpty } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                {
                    journalItems.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={[styles.cardContainer, AppStyles.hCenter]}>
                                <JournalCard
                                    content={item}
                                />
                            </View>
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
        paddingTop: Paddings.containerP
    },

    text: {
        color: 'white',
        fontSize: FontSizes.topicFS
    }
})
