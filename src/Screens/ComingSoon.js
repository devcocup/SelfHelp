// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { FontSizes } = Constants


export default class ComingSoon extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <View style={[AppStyles.center, { flex: 1 }]}>
                    <Text style={styles.text}>Coming Soon</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: FontSizes.headingFS
    }
})
