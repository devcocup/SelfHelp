// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, BorderRadii, Colors } = Constants


const RedirectButton = ({ content, onPress }) => {
    const itemBgStyle = {
        backgroundColor: Colors.darkGreen
    }

    return (
        <View style={AppStyles.center}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.boxContainer, AppStyles.center, itemBgStyle]}>
                    <Text style={styles.textStyle}>
                        {content.categoryTitle}
                    </Text>
                </View>
            </TouchableOpacity>   
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        width: width - 40,
        borderRadius: BorderRadii.boxBR,
        padding: Paddings.elementP,
        marginTop: 10
    },

    textStyle: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        textAlign: 'center',
        fontWeight: '600'
    }
})

export default RedirectButton
