import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')

const SubTopicButton = ({ text }) => {
    return (
        <TouchableOpacity>
            <View style={[styles.button, AppStyles.center]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: height / 14,
        marginTop: 10,
        width: width - 40,
        backgroundColor: Constants.Colors.lightGreen,
        borderRadius: 4
    },

    buttonText: {
        color: 'white',
        fontWeight: "600",
        fontSize: 18
    }
})

export default SubTopicButton
