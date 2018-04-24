import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'

const { height, width } = Dimensions.get('window')

const SingleCard = ({ cardContent, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.singleCardContainer}>
                <View style={[styles.iconContainer, AppStyles.center]}>
                    <Image source={cardContent.icon} style={styles.icon}/>
                </View>
                <View style={[styles.details, AppStyles.vCenter]}>
                    <Text style={styles.headingTxt}>{cardContent.subTopic}</Text>
                    <Text style={styles.labelTxt}>{cardContent.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    singleCardContainer: {
        height: height / 7,
        marginTop: 15,
        width: width - 40,
        backgroundColor: "#2C8D77",
        borderRadius: 4,
        flexDirection: "row",
        overflow: "hidden"
    },

    iconContainer: {
        height: height / 7,
        width: height / 7
    },

    icon: {
        width: 50,
        height: 50
    },

    details: {
        height: height / 7,
        width: width - height / 7 - 30,
        paddingRight: 20,
    },

    headingTxt: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14
    },

    labelTxt: {
        color: 'white',
        fontWeight: '400',
        fontSize: 12,
        marginTop: 3
    }
})

export default SingleCard
