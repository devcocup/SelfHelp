import React, { Componet } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height,width } = Dimensions.get('window')

const ModalMenuButton = ({ label, color, onPress }) => {
    const inheritedStyle = {
        backgroundColor: color
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonStyle, inheritedStyle]}>
                <Text style={styles.textStyle}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: width - 50,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },

    textStyle: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold'
    }
})

export default ModalMenuButton
