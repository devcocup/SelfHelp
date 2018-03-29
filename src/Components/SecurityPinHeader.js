// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes } = Constants

const Circle = ({ color }) => {
    return (
        <View style={[styles.circle, { backgroundColor: color }]}></View>
    )
}

const FlowLine = ({ flowIndex }) => {
    return (
        <View style={[styles.flowLine, AppStyles.center]}>
            <Circle color={flowIndex === 1 ? 'orange' : 'white'} />
            <View style={styles.line}></View>
            <Circle color={flowIndex === 2 ? 'orange' : 'white'} />
            <View style={styles.line}></View>
            <Circle color={flowIndex === 3 ? 'orange' : 'white'} />
            <View style={styles.line}></View>
            <Circle color={flowIndex === 4 ? 'orange' : 'white'} />
            <View style={styles.line}></View>
            <Circle color={flowIndex === 5 ? 'orange' : 'white'} />
        </View>       
    )
}


const SecurityPinHeader = ({ headerType, flowIndex, navigation }) => {
    flowIndex = 1
    headerType = 'flow'

    return (
        <View style={styles.headerStyle}>
            <View style={[styles.leftArea, AppStyles.center]}>
                <TouchableOpacity>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rightArea}>
            {
                headerType === 'flow' &&
                <FlowLine flowIndex={flowIndex} />
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    leftArea: {
        flex: .3,
    },

    cancelText: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: 'bold'
    },

    rightArea: {
        flex: .7,
        flexDirection: 'row'
    },

    flowLine: {
        flex: 1,
        flexDirection: 'row'
    },

    circle: {
        width: 10,
        height: 10,
        borderRadius: 10
    },

    line: {
        width: 30,
        height: 2,
        backgroundColor: 'white'
    }
})

export default SecurityPinHeader
