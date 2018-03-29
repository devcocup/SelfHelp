// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'


// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'

const { height, width } = Dimensions.get('window')
const { PanelLabels, Paddings, FontSizes, Colors, BorderRadii } = Constants

const Circle = ({ color }) => {
    return (
        <View style={[styles.circle, { backgroundColor: color }]}></View>
    )
}

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


export default class CreateSecurityPinScreen extends Component {
    onNumberClicked = (label) => {
        console.log(label)
    }

    render() {
        const dotIndex = 2

        return (
            <View style={AppStyles.mainContainer}>
                <SecurityPinHeader />
                <View style={[styles.bodyContainer, AppStyles.hCenter]}>
                    <Text style={styles.title}>Create a Security Pin</Text>
                    <View style={styles.dotArea}>
                        <PinDots dotIndex={dotIndex} />
                    </View>
                    <View style={styles.panelArea}>
                    {
                        PanelLabels.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.panel, AppStyles.center]}
                                    onPress={() => this.onNumberClicked(item)}
                                >
                                    <Text style={styles.title}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        padding: Paddings.lP
    },

    title: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600'
    },

    dotArea: {
        width: width - 140,
        height: 60
    },

    dotBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    circle: {
        width: 18,
        height: 18,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'white'
    },

    panelArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width * 4 / 5 - width / 10
    },

    panel: {
        width: width / 5,
        height: width / 5,
        borderRadius: BorderRadii.buttonBR,
        backgroundColor: Colors.darkGreen,
        margin: 5
    }
})
