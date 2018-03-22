// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import Constants from '../Lib/Constants'
import AppStyles from '../Lib/AppStyles'

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes } = Constants


const CardWithImage = ({ cardImage, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonWithImage, AppStyles.center]}>
                <View style={[styles.cardImageArea, AppStyles.center]}>
                    <Image source={cardImage} style={styles.cardImageStyle} />
                </View>
                <View style={styles.cardTextArea}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWithImage: {
        flexDirection: 'row',
        height: height / 6,
        marginTop: 15,
        width: width - 40,
        backgroundColor: Colors.lightGreen,
        borderRadius: 4
    },

    cardImageArea: {
        flex: .33
    },

    cardImageStyle: {
        width: 60,
        height: 60
    },

    cardTextArea: {
        flex: .67
    },

    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: FontSizes.topicFS
    }
})

export default CardWithImage
