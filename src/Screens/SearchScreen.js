//React
import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const SearchIcon = require('../Assets/Images/search_orange.png')

const { height, width } = Dimensions.get('window')


export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Call Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'},
    }

    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
            </View>    
        )
    }
}

const style = StyleSheet.create({

})
