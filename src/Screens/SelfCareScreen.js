//React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'

const SelfCareIcon = require('../Assets/Images/self_care_orange.png')
const { height, width } = Dimensions.get('window')

export default class SelfCareScreen extends Component {
    static navigationOptions = {
        title: 'Self-Care Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'},
    }

    render() {
        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                />
                <ScrollView>
                    <HeadingContainer
                        headingImage={SelfCareIcon}
                        headingText='Self-Care'
                    />
                </ScrollView>
            </View>    
        )
    }
}

const styles = StyleSheet.create({

})
