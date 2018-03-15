import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get("window")

const TopicButton = ({ text }) => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: height / 16,
        marginTop: 15,
        width: width - 40,
        backgroundColor: "#F7A553",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4
    },

    buttonText: {
        color: 'white',
        fontWeight: "600",
        fontSize: 18
    }
})

export default TopicButton
