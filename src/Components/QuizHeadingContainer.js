// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes } = Constants


const QuizHeadingContainer = ({ quizTitle, quizSubTitle, subTitleType }) => {
    const contentStyle = {
        fontSize: 16,
        color: 'black'
    }
    const fontStyle = subTitleType ? contentStyle : ''

    return (
        <View style={[styles.headingContainer, AppStyles.center]}>
            <Text style={styles.titleText}>
                {quizTitle}
            </Text>
            <View style={styles.separateBar}></View>
            <Text style={[styles.subTitleText, contentStyle]}>
                {quizSubTitle}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        height: height / 4,
        width,
        backgroundColor: 'white'
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
    }
})

export default QuizHeadingContainer
