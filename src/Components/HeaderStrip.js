// React
import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Colors } = Constants
const mainScreenIncices = [1, 2, 3, 4, 5]
const activeStyle = {
    backgroundColor: Colors.orange
}

const HeaderStrip = ({ index }) => {
    return (
        <View style={styles.container}>
        {
            mainScreenIncices.map((item, itemIndex) => {
                return (
                    <View key={itemIndex}>
                    {
                        (itemIndex + 1 === index) &&
                        <View
                            style={[styles.barStyle, activeStyle]}
                        />
                    }
                    {
                        (itemIndex + 1 !== index) &&
                        <View
                            style={styles.barStyle}
                        />
                    }
                    </View>
                )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height: 6,
        backgroundColor: Colors.lightOrange
    },

    barStyle: {
        width: width / 5,
        height: 6,
        backgroundColor: Colors.lightOrange
    }
})

export default HeaderStrip
