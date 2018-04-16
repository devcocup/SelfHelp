// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import Constants from '../Lib/Constants'
import AppStyles from '../Lib/AppStyles'

const { height, width } = Dimensions.get('window')

const TopicButton = ({ text }) => {
    return (
        <View style={[styles.button, AppStyles.center]}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: height / 16,
        marginTop: 15,
        width: width - 40,
        backgroundColor: '#F7A553',
        borderRadius: 4
    },

    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    }
})

export default TopicButton
