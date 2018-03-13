//React
import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const { height,width } = Dimensions.get('window')

const ChatMenu = () => {
    return(
        <View style={styles.mainContainer}></View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: width,
        height: height,
        backgroundColor: 'rgb(0,131,105)',
        opacity: .8
    }
})

export default ChatMenu
