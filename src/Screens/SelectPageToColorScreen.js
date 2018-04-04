// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const {} = Constants


export default class SelectPageToColorScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
