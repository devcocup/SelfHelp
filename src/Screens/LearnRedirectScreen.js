// React
import React, { Component } from 'react'
import { View, WebView, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'


export default class LearnRedirectScreen extends Component {
    render() {
        const { navigation } = this.props
        const { url } = navigation.state.params


        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <WebView
                    source={{ uri: url }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})
