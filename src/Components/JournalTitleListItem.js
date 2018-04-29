// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import Constants from '../Lib/Constants'
import AppStyles from '../Lib/AppStyles'

const DisabledIcon = require('../Assets/Images/checkmark.png')
const ActivatedIcon = require('../Assets/Images/checkmark_orange.png')

const { height, width } = Dimensions.get('window')
const { Paddings, Colors, FontSizes } = Constants


const JournalTitleListItem = ({ checked, label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemContainer}>
                <View style={[styles.markArea, AppStyles.center]}>
                    {
                        checked &&
                        <Image
                            source={ActivatedIcon}
                            style={styles.checkIcon}
                        />
                    }
                    {
                        !checked &&
                        <Image
                            source={DisabledIcon}
                            style={styles.checkIcon}
                        />
                    }
                </View>
                <View style={[styles.labelArea, AppStyles.vCenter]}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen,
        paddingVertical: Paddings.listPV,
        paddingHorizontal: Paddings.listPH
    },

    markArea: {
        flex: .1
    },

    checkIcon: {
        width: 40,
        height: 40,
        opacity: .6
    },

    labelArea: {
        flex: .9,
        paddingHorizontal: Paddings.listPH
    },

    label: {
        color: 'white',
        fontSize: FontSizes.listFS,
        fontWeight: '600'
    }
})

export default JournalTitleListItem
