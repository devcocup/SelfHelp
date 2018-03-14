import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const HomeButton = ({ Label, source, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonStyle}>
                <Image source={source} style={{ height: 55, width: 55 }} />
                <Text style={styles.textStyle}> {Label} </Text>
            </View>
        </TouchableOpacity>
    )
}

var styles = StyleSheet.create({

    buttonStyle: {
        marginLeft: 10,
        backgroundColor: 'rgb(0,143,120)',
        height: 120,
        width: 160,
        borderRadius: 7,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    textStyle: {
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
        marginBottom: 20,
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold'
    }
})

export default HomeButton
