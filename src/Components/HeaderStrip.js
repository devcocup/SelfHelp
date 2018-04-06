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
                    <View
                        key={itemIndex}
                        style={styles.barArea}
                    >
                    {
                        (item === index) &&
                        <View
                            style={[styles.barStyle, activeStyle]}
                        />
                    }
                    {
                        (item !== index) &&
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
        flexDirection: 'row',
        height: 6,
    },

    barArea: {
        flex: .2,
    },

    barStyle: {
        height: 6,
        backgroundColor: Colors.lightOrange
    }
})

export default HeaderStrip
