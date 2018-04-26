// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalTitleListItem from '../Components/JournalTitleListItem'

const { JournalPromptQuestions } = Constants

const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})

const onListClick = (item, index, navigation) => {
    const { navigate } = navigation
    navigate('JournalHistoryScreen', { question: item })
}

const ListContainer = ({ navigation }) => {
    const list = JournalPromptQuestions.map((item, index) => {
        let checked = false
        const db = SQLite.openDatabase({name: 'journalsDB', createFromLocation: '/data/journalsDB.sqlite'})
        
        db.transaction((txn) => {
            txn.executeSql(`SELECT * FROM journals where journal_question = "${item}"`, [], (tx, res) => {
                let tempJournals = []
                for (let i = 0; i < res.rows.length; ++i) {
                    tempJournals.push(res.rows.item(i))
                }
                if (tempJournals.length > 0) {
                    checked = true
                }
            })
        })

        return (
            <View key={index}>
                <JournalTitleListItem
                    checked={checkedState}
                    label={item}
                    onPress={() => onListClick(item, index, navigation)}
                />
            </View>
        )
    })

    return (
        <View>{list}</View>
    )
}


export default class PastJournalsScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            checkedState: false
        }
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
                    {/*<ListContainer
                        navigation={navigation}
                    />*/}
                    <View>
                    {
                        JournalPromptQuestions.map((item, index) => {
                            let checked = false
                            
                            db.transaction((txn) => {
                                txn.executeSql(`SELECT * FROM journals where journal_question = "${item}"`, [], (tx, res) => {
                                    let tempJournals = []
                                    for (let i = 0; i < res.rows.length; ++i) {
                                        tempJournals.push(res.rows.item(i))
                                    }
                                    if (tempJournals.length > 0) {
                                        this.setState({
                                            checkedState: true
                                        })
                                    }
                                })
                            })

                            return (
                                <View key={index}>
                                    <JournalTitleListItem
                                        checked={this.state.checkedState}
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
