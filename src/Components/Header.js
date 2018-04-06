// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height,width } = Dimensions.get('window')

const MenuIcon = require('../Assets/Images/nav_menu.png')
const CheckMarkIcon = require('../Assets/Images/checkmark.png')

const goToScreen = (ScreenName, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName ? ScreenName : '')
}

const goBackScreen = (navigation) => {
    const { goBack } = navigation
    goBack()
}

const Header = ({ type, checkScreen, navigation }) => {
    const headerText = (type === 'Home') ? 'Safe Helpline' : 'Back'

    return (
        <View style={styles.headerStyle}>
            {
                (type === 'Back') &&
                <View style={[styles.titleArea, AppStyles.vCenter]}>
                    <View style={[styles.backArea, AppStyles.center]}>
                        <TouchableOpacity onPress={() => goBackScreen(navigation)}>
                            <Text style={styles.textStyle}>{headerText}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.restArea}></View>
                </View>
            }
            {
                (type === 'Home') &&
                <View style={[styles.titleArea, AppStyles.hCenter]}>
                    <Text style={styles.textStyle}>{headerText}</Text>
                </View>
            }
            <View style={[styles.checkArea, AppStyles.center]}>
                <TouchableOpacity
                    onPress={() => goToScreen(checkScreen, navigation)}
                >
                    <Image
                        source={CheckMarkIcon}
                        style={styles.checkIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.menuArea, AppStyles.center]}>
                <TouchableOpacity
                    onPress={() => goToScreen('Home', navigation)}
                >
                    <Image
                        source={MenuIcon}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: Constants.Colors.secondaryBgColor
    },

    textStyle: {
        color: 'white',
        fontSize: Constants.FontSizes.menuFS,
        fontWeight: 'bold',
    },

    titleArea: {
        flex: .66,
        flexDirection: 'row',
        paddingLeft: 10,
    },

    backArea: {
        flex: .5,
        borderRightWidth: 2,
        borderRightColor: Constants.Colors.lightGreen
    },

    restArea: {
        flex: .5
    },

    checkArea: {
        flex: .17,
        borderLeftWidth: 2,
        borderLeftColor: Constants.Colors.lightGreen
    },

    checkIcon: {
        width: 35,
        height: 35
    },

    menuArea: {
        flex: .17,
        borderLeftWidth: 2,
        borderLeftColor: Constants.Colors.lightGreen
    },

    menuIcon: {
        width: 35,
        height: 25
    }

})

export default Header
