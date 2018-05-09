// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes } = Constants


const QuizHeadingContainer = ({ quizTitle, quizSubTitleOne, quizSubTitleTwo, subTitleType }) => {
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
                {quizSubTitleOne}
            </Text>
            <Text style={[styles.subTitleText, contentStyle]}>
                {quizSubTitleTwo}
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
        textAlign: 'center',
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginBottom: 5
    },

    separateBar: {
        height: 2,
        width: width - 60,
        backgroundColor: Colors.orange
    },

    subTitleText: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginBottom: 10,
        paddingTop: 5
    }
})

export default QuizHeadingContainer
