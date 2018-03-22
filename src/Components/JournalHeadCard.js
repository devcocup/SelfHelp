// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')

const HeadTitleBox = ({ title }) => {
    return (
        <View style={styles.titleBox}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}


const JournalHeadCard = ({ topic, content }) => {
    return (
        <View style={styles.cardContainer}>
            <HeadTitleBox title={topic} />
            <View style={[styles.cardContentBox, AppStyles.center]}>
                <Text style={styles.contentText}>
                    {content}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: width - 40,
        marginTop: Constants.Margins.containerM,
        backgroundColor: Constants.Colors.darkGreen,
        borderRadius: Constants.BorderRadii.boxBR
    },

    titleBox: {
        height: height / 16,
        width: width - 40,
        backgroundColor: "#F7A553",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4
    },

    titleText: {
        color: 'white',
        fontWeight: "600",
        fontSize: Constants.FontSizes.topicFS
    },

    cardContentBox: {
        padding: 30
    },

    contentText: {
        color: 'white',
        fontWeight: '600',
        fontSize: Constants.FontSizes.contentFS
    }
})

export default JournalHeadCard
