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

    constructor(props) {
        super(props)
    
        this.state = {
            chatUrl: ''
        }
    }

    componentWillMount() {
        const { navigation } = this.props
        const { chatType } = navigation.state.params
        let tempChatUrl = ''

        if (chatType === 'OneOnOne') {
            tempChatUrl = 'https://hotline.safehelpline.org/safe-helpline/'
        } else {
            tempChatUrl = 'https://safe-helproom.safehelpline.org'
        }
        this.setState({
            chatUrl: tempChatUrl
        })
    }

    render() {
        const { navigation } = this.props
        const { chatUrl } = this.state

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <WebView
                    source={{ url: chatUrl}}
                />
            </View>   
        )
    }
}

const styles = StyleSheet.create({

})
