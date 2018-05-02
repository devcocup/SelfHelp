// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Slider } from 'react-native-elements'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { SelfCareQuizLabels, Margins, Paddings, FontSizes, Colors, BorderRadii } = Constants

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={[styles.buttonStyle, AppStyles.center]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default class SelfCareQuizScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            scoreValues: [],
            quizIndex: 1,
            titleText: 'Quetsion 1',
            subTitleText: ''
        }
    }

    componentDidMount() {
        const scores = [0, 0, 0, 0, 0, 0]

        this.setState({
            scoreValues: scores
        })
    }

    onSliderChange(value, index) {
        const scores = this.state.scoreValues
        tempScore = Math.floor(value)
        scores[index] = tempScore

        this.setState({
            scoreValues: scores
        })
    }

    goToScreen = (ScreenName, scoreValues, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName, {scoreValues})
    }

    onSkip = (navigation) => {
        if (this.state.quizIndex >= 6) {
            this.runSQL(this.state.scoreValues)
            this.goToScreen('SelfCareQuizResultsScreen', this.state.scoreValues, navigation)
        } else {
            this.setState({
                quizIndex: this.state.quizIndex + 1
            })
        }
    }

    runSQL(scoreValues) {
        const db = SQLite.openDatabase({name: 'plansDB', createFromLocation: '/data/plansDB.sqlite'})
        const currentTime = new Date().toLocaleString()
        db.transaction((txn) => {
            txn.executeSql('CREATE TABLE IF NOT EXISTS Plans(id INTEGER PRIMARY KEY NOT NULL, plan_time VARCHAR(20), sadness INTEGER, anxiety INTEGER, sleep INTEGER, loneliness INTEGER, stress INTEGER, hopelessness INTEGER)')
            txn.executeSql(`INSERT INTO Plans (plan_time, sadness, anxiety, sleep, loneliness, stress, hopelessness) VALUES("${currentTime}", "${scoreValues[0]}", "${scoreValues[1]}", "${scoreValues[2]}", "${scoreValues[3]}", "${scoreValues[4]}", "${scoreValues[5]}")`, [])
        })
    }

    onContinue = (navigation) => {
        if (this.state.quizIndex >= 6) {
            this.runSQL(this.state.scoreValues)
            this.goToScreen('SelfCareQuizResultsScreen', this.state.scoreValues, navigation)
        } else {
            this.setState({
                quizIndex: this.state.quizIndex + 1
            })
        }
    }

    render() {
        const { onContinue, onSkip } = this
        const { navigation } = this.props
        const { quizIndex, scoreValues } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={AppStyles.hCenter}>
                    {
                        SelfCareQuizLabels.map((item, index) => {
                            return (
                                <View key={index}>
                                {
                                    (index + 1) === quizIndex &&
                                    <View style={[styles.headingContainer, AppStyles.center]}>
                                        <Text style={styles.titleText}>
                                            Question {quizIndex}
                                        </Text>
                                        <View style={styles.separateBar}></View>
                                        <Text style={styles.subTitleText}>
                                            {item}
                                        </Text>
                                    </View>
                                }
                                </View>
                            )
                        })
                    }
                        <View style={[styles.scoreArea, AppStyles.center]}>
                            <Text style={styles.scoreText}>{scoreValues ? scoreValues[quizIndex - 1] : 0}</Text>
                        </View>
                        <View style={styles.sliderArea}>
                            <Slider
                                value={scoreValues ? scoreValues[quizIndex - 1] : 0}
                                maximumValue={5}
                                trackStyle={styles.trackStyle}
                                minimumTrackTintColor={Colors.orange}
                                thumbStyle={styles.thumbStyle}
                                onValueChange={(value) => this.onSliderChange(value, quizIndex - 1)}
                            />
                            <View style={styles.statusTextArea}>
                                <Text style={styles.statusText}>Never</Text>
                                <Text style={styles.statusText}>Sometimes</Text>
                                <Text style={styles.statusText}>Always</Text>
                            </View>
                        </View>
                        <View style={styles.buttonArea}>
                            <Button
                                text='Skip'
                                onPress={() => this.onSkip(navigation)}
                            />
                            <Button
                                text='Continue'
                                onPress={() => this.onContinue(navigation)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headingContainer: {
        height: height / 4,
        width,
        backgroundColor: 'white',
        paddingHorizontal: Paddings.containerP
    },

    titleText: {
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginBottom: 10
    },

    separateBar: {
        height: 2,
        width: width - 60,
        backgroundColor: Colors.orange
    },

    subTitleText: {
        color: Colors.gray,
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginTop: 10
    },

    scoreArea: {
        width: width - 40,
        height: 80,
        backgroundColor: Colors.orange,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.containerM
    },

    scoreText: {
        color: 'white',
        fontSize: FontSizes.headingFS,
        fontWeight: 'bold'
    },

    sliderArea: {
        flex: 1,
        width: width - 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGreen,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.containerM,
        padding: Paddings.containerP
    },

    trackStyle: {
        width: width - 120,
        height: 5
    },

    thumbStyle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 40
    },

    statusTextArea: {
        flexDirection: 'row',
        width: width - 80,
        justifyContent: 'space-between',
        padding: Paddings.elementP,
        marginTop: Margins.containerM
    },

    statusText: {
        color: 'white',
        fontSize: FontSizes.textContentFS,
        fontWeight: 'bold'
    },

    buttonArea: {
        flexDirection: 'row',
        width: width - 40,
        justifyContent: 'space-between'
    },

    buttonStyle: {
        height: height / 5,
        width: width / 2 - 30,
        marginTop: Margins.containerM,
        backgroundColor: Colors.lightGreen,
        borderRadius: BorderRadii.boxBR
    },

    buttonText: {
        color: 'white',
        fontSize: FontSizes.textContentFS,
        fontWeight: 'bold'
    }
})
