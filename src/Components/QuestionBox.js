// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')


const QuestionBox = ({ content }) => {
    return (
        <View style={styles.boxContainer}>
            <Text style={styles.textStyle}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        width: width - 40,
        backgroundColor: Constants.Colors.orange,
        borderRadius: Constants.BorderRadii.boxBR,
        padding: Constants.Paddings.elementP
    },

    textStyle: {
        color: 'white',
        fontSize: Constants.FontSizes.quizQuestionFS
    }
})

export default QuestionBox
