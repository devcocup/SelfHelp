//React
import React, { Component } from 'react'
import { View, Text, WebView, StyleSheet, Dimensions  } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')


export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'}
    }

    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <WebView
                    source={{ url: 'https://safe-helproom.safehelpline.org' }}
                />
            </View>   
        )
    }
}

const styles = StyleSheet.create({

})
