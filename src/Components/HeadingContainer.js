// React
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get("window")

const HeadingContainer = ({ headingImage, headingText }) => {
    return (
        <View style={[styles.headingContainer, AppStyles.hCenter, AppStyles.vCenter]}>
            <Image source={headingImage} style={styles.imgStyle}/>
            <Text style={styles.textStyle}>{headingText}</Text>
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

    imgStyle: {
        width: 65,
        height: 65
    },

    textStyle: {
        color: 'black',
        fontSize: Constants.FontSizes.headingFS,
        fontWeight: '900',
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold'
    }
})

export default HeadingContainer
