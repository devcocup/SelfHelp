// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import SingleCard from '../Components/SingleCard'
import TopicButton from '../Components/TopicButton'

const { height, width } = Dimensions.get('window')
const { SelfCareSuggestionLabels } = Constants

const onCardSelected = (content, navigation) => {
    const { navigate } = navigation
    navigate('ExerciseDetailScreen', { content })
}

const CardContainer = ({ navigation }) => {
    const { params } = navigation.state
    const { status } = params
    const headerText = 'Suggestions for ' + status + ':'
    const cardList = SelfCareSuggestionLabels.map((item, index) => {
        return (
            <SingleCard
                key={index}
                cardContent={item}
                onPress={() => onCardSelected(item, navigation)}
            />
        )
    })

    return (
        <View
            style={[styles.cardContainer, AppStyles.hCenter]}
        >
            {
                <TopicButton
                    text={headerText}
                />
            }
            {cardList}
        </View>
    )
}


export default class SelfCareSuggestionScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <CardContainer
                        navigation={navigation}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
