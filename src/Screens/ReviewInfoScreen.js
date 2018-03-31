// React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'


export default class ReviewInfoScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <SecurityPinHeader
                    headerType='FLOW'
                    flowIndex={4}
                    navigation={navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
