import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Paddings, Colors } = Constants


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
        marginTop: 10,
        width: width - 40,
        backgroundColor: Colors.lightGreen,
        borderRadius: 4,
        padding: Paddings.elementP
    },

    buttonText: {
        color: 'white',
        fontWeight: "600",
        fontSize: 18,
        textAlign: 'center'
    }
})

export default SubTopicButton
