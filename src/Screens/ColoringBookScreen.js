// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import CardWithImage from '../Components/CardWithImage'

const PenIcon = require('../Assets/Images/self_care_orange.png')
const AnswerJournalIcon = require('../Assets/Images/answer_journal.png')
const BrowseJournalIcon = require('../Assets/Images/browse_journal.png')

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes } = Constants

goToScreen = (ScreenName, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName)
}

onColorNewpage = (navigation) => {
    goToScreen('SelectPageToColorScreen', navigation)
}

onBrowseSavedPages = (navigation) => {
    goToScreen('BrowseSavedPages', navigation)
}

const CardContainer = ({ navigation }) => {
    return (
        <View style={[styles.cardContainer, AppStyles.hCenter]}>
            <CardWithImage
                cardImage={AnswerJournalIcon}
                text='Color a new page'
                onPress={() => onColorNewpage(navigation)}
            />
            <CardWithImage
                cardImage={BrowseJournalIcon}
                text='Browse saved pages'
                onPress={() => onBrowseSavedPages(navigation)}
            />
        </View>
    )
}


export default class ColoringBookScreen extends Component {
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
                        headingImage={PenIcon}
                        headingText='Coloring Book'
                    />
                    <CardContainer
                        navigation={navigation}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.primaryBgColor
    }
})
