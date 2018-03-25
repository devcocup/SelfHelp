// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'

const SearchIcon = require('../Assets/Images/search_orange.png')

const { height, width } = Dimensions.get('window')
const { Paddings, FontSizes } = Constants


export default class LocalResourcesScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <HeadingContainer
                        headingImage={SearchIcon}
                        headingText={navigation.state.params.cardTitle}
                    />
                    <View style={[styles.inputContainer, AppStyles.hCenter]}>
                        <View style={styles.locationInputArea}>
                            <Text style={styles.hintText}>Enter your location info:</Text>
                        </View>
                        <View style={styles.categortyInputArea}>
                        </View>
                        <View style={styles.buttonArea}>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: Paddings.containerP
    },

    locationInputArea: {

    },

    hintText: {
        color: 'white',
        fontSize: FontSizes.hintFS,
        fontWeight: '600'
    },

    categortyInputArea: {

    },

    buttonArea: {

    }
})
