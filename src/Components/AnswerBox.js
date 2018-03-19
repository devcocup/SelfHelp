// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')


const AnswerBox = ({ content }) => {
    return (
        <TouchableOpacity>
            <View style={styles.boxContainer}>
                <View style={[styles.captionArea, AppStyles.center]}>
                    <Text style={styles.captionText}>
                        {content.choiceCaption}
                    </Text>
                </View>
                <View style={styles.contentArea}>
                    <Text style={styles.textStyle}>
                        {content.content}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        width: width - 40,
        backgroundColor: Constants.Colors.darkGreen,
        borderRadius: Constants.BorderRadii.boxBR,
        padding: Constants.Paddings.elementP,
        marginTop: 10
    },

    captionArea: {
        flex: .15
    },

    captionText: {
        color: 'white',
        fontSize: Constants.FontSizes.quizCaptionFS,
        fontWeight: '900'
    },

    contentArea: {
        flex: .85
    },

    textStyle: {
        color: 'white',
        fontSize: Constants.FontSizes.quizAnswerFS
    }
})

export default AnswerBox
