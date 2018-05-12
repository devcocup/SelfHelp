// React
import React, { Component } from 'react'
import { View, Text, WebView, StyleSheet, Dimensions, ActivityIndicator, Platform } from 'react-native'

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

    ActivityIndicatorLoadingView() {
        return (
            <ActivityIndicator
                color='white'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    render() {
        const { navigation } = this.props
        const { url } = this.state
        // console.log(url)

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <WebView
                    style={styles.WebViewStyle}
                    source={{ uri: url }}
                    renderLoading={this.ActivityIndicatorLoadingView}
                    startInLoadingState={true}
                    scalesPageToFit

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ActivityIndicatorStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    WebViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        marginTop: (Platform.OS) === 'ios' ? 20 : 0
    }
})
