// React
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get("window")

const HeadingContainer = ({ headingImage, headingText }) => {
    return (
        <View style={[styles.headingContainer, AppStyles.hCenter]}>
            <View style={styles.iconArea}>
                <Image source={headingImage} style={styles.imgStyle} />
            </View>
            <View style={styles.textArea}>
                <Text style={styles.textStyle}>{headingText}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        height: height / 4,
        width,
        backgroundColor: "white",
    },

    iconArea: {
        flex: .4,
        alignItems: 'flex-end'
    },

    imgStyle: {
        width: 90,
        height: 65
    },

    textArea: {
        flex: .6
    },

    textStyle: {
        color: 'black',
        fontSize: Constants.FontSizes.headingFS,
        fontWeight: '900',
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold',
        marginLeft: 5
    }
})

export default HeadingContainer
