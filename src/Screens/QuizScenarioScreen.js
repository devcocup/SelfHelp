// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')

const quizTitle = 'Scenario 1'
const quizSubTitle = 'At a bar'

const QuizHeadingContainer = () => {
    return (
        <View style={[styles.headingContainer, AppStyles.center]}>
            <Text style={styles.titleText}>
                {quizTitle}
            </Text>
            <View style={styles.separateBar}></View>
            <Text style={styles.subTitleText}>
                {quizSubTitle}
            </Text>
        </View>
    )
}

const CardContainer = () => {
    return (
        <View></View>
    )
}

export default class QuizScenarioScreen extends Component {
    render() {
        const { navigation } = this.props
    
        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <QuizHeadingContainer />
                    <CardContainer />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headingContainer: {
        height: height / 4,
        width,
        backgroundColor: 'white'
    },

    titleText: {
        fontSize: Constants.FontSizes.quizTitleFS,
        fontWeight: '600',
        marginBottom: 10
    },

    separateBar: {
        height: 2,
        width: width - 60,
        backgroundColor: Constants.Colors.orange
    },

    subTitleText: {
        color: Constants.Colors.gray,
        fontSize: Constants.FontSizes.quizTitleFS,
        fontWeight: '600',
        marginTop: 10
    }
})
