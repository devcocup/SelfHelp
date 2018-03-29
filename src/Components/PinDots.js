// React
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Global Styles & Constants 
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Circle from '../Components/Circle'

const { Colors } = Constants


const PinDots = ({ dotIndex }) => {
    const defaultColor = Colors.primaryBgColor

    return (
        <View style={[styles.dotBox, AppStyles.hCenter]}>
            <Circle color={dotIndex >= 1 ? 'white' : defaultColor} />
            <Circle color={dotIndex >= 2 ? 'white' : defaultColor} />
            <Circle color={dotIndex >= 3 ? 'white' : defaultColor} />
            <Circle color={dotIndex >= 4 ? 'white' : defaultColor} />
            <Circle color={dotIndex >= 5 ? 'white' : defaultColor} />
            <Circle color={dotIndex >= 6 ? 'white' : defaultColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    dotBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default PinDots
