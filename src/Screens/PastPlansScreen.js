// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, Colors, FontSizes } = Constants

const PlanCard = ({ itemContent }) => {
    return (
        <TouchableOpacity>
            <View style={[styles.plancard, AppStyles.hCenter]}>
                <Text style={styles.dateStyle}>{itemContent.date}</Text>
                <Text style={styles.barStyle}>|</Text>
                <Text style={styles.timeStyle}>{itemContent.time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class PastPlansScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isPlanEmpty: true,
            planItems: []
        }
    }

    componentDidMount() {
        this.runSQL()
    }

    runSQL() {
        const db = SQLite.openDatabase({name: 'plansDB', createFromLocation: '/data/plansDB.sqlite'})
        db.transaction((txn) => {
            txn.executeSql('CREATE TABLE IF NOT EXISTS Plans(id INTEGER PRIMARY KEY NOT NULL, plan_time VARCHAR(20), sadness INTEGER, anxiety INTEGER, sleep INTEGER, loneliness INTEGER, stress INTEGER, hopelessness INTEGER)')
            txn.executeSql('SELECT * FROM plans', [], (tx, res) => {
                let tempPlans = []
                for (let i = 0; i < res.rows.length; ++i) {
                    tempPlans.push(res.rows.item(i))
                }
                if (tempPlans.length > 0) {
                    this.setState({
                        isJournalEmpty: false
                    })
                }
                this.setState({
                    planItems: tempPlans
                })
            })
        })
    }

    onPlanItemClicked = (content, navigation) => {
        const { navigate } = navigation
        const { sadness, anxiety, sleep, loneliness, stress, hopelessness} = content
        navigate('SelfCareQuizResultsScreen', { scoreValues: [sadness, anxiety, sleep, loneliness, stress, hopelessness] })
    }

    determineBgColor = (content) => {
        const scores = Object.keys(content).map( key => content[key]);

        const neverProportion = scores.filter(x => x === 0).length / scores.length;
        const sometimesProportion = scores.filter(x => x > 0 && x < 5).length / scores.length;
        const alwaysProportion = scores.filter(x => x === 5).length / scores.length;
        const maxProportion = Math.max(neverProportion, sometimesProportion, alwaysProportion);
        if(maxProportion === neverProportion) return Colors.orange ;
        if(maxProportion === sometimesProportion) return Colors.secondaryOrange ;
        if(maxProportion === alwaysProportion) return Colors.secondaryGray;
    }

    render() {
        const { navigation } = this.props
        const { planItems } = this.state

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                {
                    planItems.map((item, index) => {
                        const bgColor = {
                            backgroundColor : this.determineBgColor(item)
                        }
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => this.onPlanItemClicked(item, navigation)}
                            >
                                <View style={[styles.plancard, AppStyles.hCenter, bgColor]}>
                                    <Text style={styles.dateStyle}>{item.plan_time}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    plancard: {
        width,
        height: 60,
        flexDirection: 'row',
        // backgroundColor: Colors.orange,
        // marginBottom: 1,
        paddingLeft: Paddings.containerP
    },

    dateStyle: {
        color: 'white',
        fontSize: FontSizes.listFS,
        fontWeight: 'bold'
    },

    barStyle: {
        color: 'white',
        marginHorizontal: Margins.elementM
    },

    timeStyle: {
        color: 'white',
        fontSize: FontSizes.listFS
    }
})
