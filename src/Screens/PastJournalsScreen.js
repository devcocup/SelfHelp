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

const onListClick = (item, index, checked, navigation) => {
    const { navigate } = navigation
    if ( checked) {
        navigate('JournalHistoryScreen', { question: item })        
    } else {
        const headerTitle = 'Current Journal Prompt'
        const headerContent = item
        navigate('CurrentJournalPromptScreen', { headerTitle, headerContent })
    }

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
      this.runJournalAnswersCheck()
    }

    // componentWillUnmount() {
    //     this.statePromises.forEach(p => p.cancel())
    // }
    
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
            txn.executeSql('DROP TABLE IF EXISTS Version', [])
            txn.executeSql('CREATE TABLE IF NOT EXISTS Version(id INTEGER PRIMARY KEY NOT NULL, installed BOOLEAN )')
            txn.executeSql(`INSERT INTO Version (installed) VALUES("TRUE")`, [])
        })
    }

  runJournalAnswersCheck() {

    JournalPromptQuestions.map((item, index) => {
      let checked = false
      var tempStates = this.state.checkedStates
      let result = new Promise((resolve, reject) => {
        db.transaction((txn) => {
          txn.executeSql(`SELECT journal_answer FROM journals where journal_question = "${encrypt(AppKey, item)}"`, [], (tx, res) => {
            resolve(res.rows.length > 0)
          })
        })
      });
      result.then((res) => {
        tempStates[index] = res
        this.setState({
          checkedStates: tempStates
        })
      })
    });
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
                  let checked = this.state.checkedStates[index]
                  return (
                    <View key={index}>
                      <JournalTitleListItem
                        checked={this.state.checkedStates[index]}
                        label={item}
                        onPress={() => onListClick(item, index, checked, navigation)}
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
