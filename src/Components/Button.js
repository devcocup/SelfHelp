import React, { Componet } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height,width } = Dimensions.get('window')

const Button = ({ label, bgColor, onPress }) => {
    const inheritedStyle = {
        backgroundColor: bgColor
    }

    const textColor = {
        color: bgColor === 'white' ? 'black' : 'white'
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonStyle, inheritedStyle]}>
                <Text style={[styles.textStyle, textColor]}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: width - 40,
        height: 65,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },

    textStyle: {
        fontSize: 23,
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold'
    }
})

export default Button
