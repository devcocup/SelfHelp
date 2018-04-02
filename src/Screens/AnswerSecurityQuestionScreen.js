// React
import React, { Component } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets

const { height, width } = Dimensions.get('window')


export default class AnswerSecurityQuestionScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <KeyboardAvoidingView
                style={AppStyles.mainContainer}
                behavior='padding'
            >
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({

})
