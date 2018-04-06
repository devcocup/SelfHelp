// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import TopicButton from '../Components/TopicButton'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')

const DescriptionTextContainer = () => {
    const textList = Constants.WhatCanIDoToHelpLabels.map((item, index) => {
        return (
            <Text
                key={index}
                style={styles.descriptionText}>
                {item}
            </Text>
        )
    })

    return (
        <View style={styles.descriptionTextArea}>
            {textList}
        </View>
    )
}


export default class WhatCanIDoScreen extends Component {
    goToScreen = (ScreeenName) => {
        const { navigate } = this.props.navigation
        navigate(ScreeenName)
    }

    onContinue = () => {
        this.goToScreen('QuizScenarioScreen')
    }

    render() {
        const { navigation } = this.props
        const { subTopic } = navigation.state.params

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    checkScreen='JournalScreen'
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={[styles.container, AppStyles.hCenter]}>
                        <View style={[styles.headingContainer, AppStyles.center]}>
                            <Text style={styles.headerText}>
                                {subTopic}
                            </Text>
                        </View>
                        <TopicButton
                            text='Introduction:'
                        />
                        <DescriptionTextContainer />
                        <Button
                            label="Continue"
                            bgColor="white"
                            onPress={this.onContinue}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    headingContainer: {
        height: height / 8,
        width,
        marginTop: 15
    },

    headerText: {
        color: 'white',
        fontSize: Constants.FontSizes.headingFS,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    descriptionTextArea: {
        width,
        paddingHorizontal: 30,
        marginTop: 20
    },

    descriptionText: {
        color: 'white',
        marginBottom: 20
    }
})
