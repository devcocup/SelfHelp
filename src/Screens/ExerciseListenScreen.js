// React
import React, { Component } from 'react'
import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')

const AudioControl = () => {
    return (
        <View style={[styles.audioControl, AppStyles.center]}>
            <Text style={styles.textStyle}>AUDIO CONTROLS</Text>
        </View>
    )
}


export default class ExerciseListenScreen extends Component {
    render() {
        const { navigation } = this.props
        const { params } = navigation.state
        const { bgImage } = params

        return (
            <ImageBackground
                style={AppStyles.mainContainer}
                source={bgImage}
            >
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <View style={[{flex: 1}, AppStyles.vEnd]}>
                    <AudioControl />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    audioControl: {
        height: height / 8,
        width,
        backgroundColor: Constants.Colors.gray
    },

    textStyle: {
        color: 'white',
        fontSize: Constants.FontSizes.topicFS
    }
})
