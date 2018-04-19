// React
import React, { Component } from 'react'
import { View, Text, WebView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')


export default class TransitionResourcesScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            url: ''
        }
    }

    componentWillMount() {
        this.setState({
            url: 'https://safehelpline.org/tsm-search.cfm?mode=full'
        })
    }

    render() {
        const { navigation } = this.props
        const { url } = this.state
        console.log(url)

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <WebView
                    source={{ url: url }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
