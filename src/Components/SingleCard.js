import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const SingleCard = ({ cardContent }) => {
    return (
        <View style={styles.singleCardContainer}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>Icon</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.headingTxt}>{cardContent.subTopic}</Text>
                <Text style={styles.labelTxt}>{cardContent.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    singleCardContainer: {
        height: height / 7,
        marginTop: 15,
        width: width - 40,
        backgroundColor: "#2C8D77",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        flexDirection: "row",
        overflow: "hidden"
    },

    iconContainer: {
        height: height / 7,
        width: height / 7,
        alignItems: "center",
        justifyContent: "center"
    },

    details: {
        height: height / 7,
        width: width - height / 7 - 20,
        justifyContent: "center",
        padding: 10
    },

    icon: {
        color: "white",
        fontWeight: "600",
        fontSize: 18
    },

    headingTxt: {
        color: "white",
        fontWeight: "600",
        fontSize: 14
    },

    labelTxt: {
        color: "white",
        fontWeight: "400",
        fontSize: 12,
        marginTop: 3
    }
})

export default SingleCard
