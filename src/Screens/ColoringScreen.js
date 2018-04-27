// React
import React, { Component } from 'react'
import { View, Text, WebView, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import TopicButton from '../Components/TopicButton'

const { height, width } = Dimensions.get('window')


export default class ColoringScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newPageUrl: ''
        }
    }

    componentWillMount() {
        const { navigation } = this.props
        const { params } = navigation.state
        const { url } = params

        this.setState({
            newPageUrl: url
        })
    }

    savePicture = (navigation) => {
        const { goBack } = navigation
        this.webview.postMessage('save')
        goBack()
    }

    render() {
        const { navigation } = this.props
        const { newPageUrl } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Coloring'
                    onSave={() => this.savePicture(navigation)}
                    navigation={navigation}
                />
                <WebView
                    ref={ webview => { this.webview = webview; }}
                    source={{ url: newPageUrl }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1
    }
})
