// React
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import JournalHeadCard from '../Components/JournalHeadCard'
import CardWithImage from '../Components/CardWithImage'

const JournalIcon = require('../Assets/Images/journal_orange.png')
const AnswerJournalIcon = require('../Assets/Images/answer_journal.png')
const BrowseJournalIcon = require('../Assets/Images/browse_journal.png')

const { height, width } = Dimensions.get('window')

const cardHeadTitle = 'Current Journal Prompt'
const cardContentText = 'How are you feeling today?'

const goToScreen = (ScreenName, headerTitle, headerContent, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName, { headerTitle, headerContent })
}

const onCurrentJournal = (navigation, headerTitle, headerContent) => {
    goToScreen('CurrentJournalPromptScreen', headerTitle, headerContent, navigation)
}

const onBrowseJournal = (navigation) => {
    console.log('browse journal clicked')
}

const CardContainer = ({ navigation }) => {
    return (
        <View style={AppStyles.hCenter}>
            <JournalHeadCard
                topic={cardHeadTitle}
                content={cardContentText}
            />
            <CardWithImage
                cardImage={AnswerJournalIcon}
                text='Answer Current Journal'
                onPress={() => onCurrentJournal(navigation, cardHeadTitle, cardContentText)}
            />
            <CardWithImage
                cardImage={BrowseJournalIcon}
                text='Browse Past Journals'
                onPress={() => onBrowseJournal(navigation)}
            />
        </View>
    )
}


export default class JournalScreen extends Component {
    render() {
        const { navigation } = this.props
    
        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <HeadingContainer
                            headingImage={JournalIcon}
                            headingText='Journal'
                        />
                        <CardContainer
                            navigation={navigation}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
