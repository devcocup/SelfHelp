// React
import React from 'react'
import { View, StyleSheet } from 'react-native'

const Circle = ({ color }) => {
    return (
        <View style={[styles.circle, { backgroundColor: color }]}></View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 18,
        height: 18,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'white'
    }
})

export default Circle
