// React
import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

export default class PastPlansScreen extends Component {
    render() {
        return(
            <View style={AppStyles.mainContainer}>
                <Header type='Back' />
                <ScrollView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
