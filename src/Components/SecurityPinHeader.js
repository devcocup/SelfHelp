// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes, BorderRadii, Paddings } = Constants

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

const onResetClicked = () => {
    console.log('reset button clicked')
}

const ResetButton = () => {
    return (
        <View style={[styles.resetBtnArea, AppStyles.hEnd]}>
            <TouchableOpacity
                onPress={() => onResetClicked}
            >
                <View style={[styles.resetBtn, AppStyles.center]}>
                    <Text style={styles.headerText}>Reset</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const onCancelClicked = () => {
    console.log('cancel button clicked')
}


const SecurityPinHeader = ({ headerType, flowIndex, navigation }) => {
    return (
        <View style={styles.headerStyle}>
            <View style={[styles.leftArea, AppStyles.center]}>
                <TouchableOpacity onPress={() => onCancelClicked}>
                    <Text style={styles.headerText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rightArea}>
            {
                headerType === 'FLOW' &&
                <FlowLine flowIndex={flowIndex} />
            }
            {
                headerType === 'RESET' &&
                <ResetButton />
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

    headerText: {
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
        width: width / 10,
        height: 2,
        backgroundColor: 'white'
    },

    resetBtnArea: {
        flex: 1,
        paddingRight: Paddings.elementP
    },

    resetBtn: {
        width: width / 3,
        height: 40,
        backgroundColor: Colors.red,
        borderRadius: BorderRadii.boxBR
    }
})

export default SecurityPinHeader
