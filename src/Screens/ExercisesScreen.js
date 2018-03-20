//React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import SingleCard from '../Components/SingleCard'

const ExercisesIcon = require('../Assets/Images/exercises_orange.png')

const { height, width } = Dimensions.get('window')

const goToScreen = (ScreenName, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName)
}

const onCardSelected = (subTopic, navigation) => {
    let ScreenName = ''

    switch (subTopic) {
        case 'At the Beach':
            ScreenName = 'AtTheBeachScreen'
            break
        default:
            break
    }

    goToScreen(ScreenName, navigation)
}

const CardContainer = ({ navigation }) => {
    const cardList = Constants.ExercisesLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
            {
                item.content.map((cardItem, cardIndex) => {
                    return (
                        <SingleCard
                            key={cardIndex}
                            cardContent={cardItem}
                            onPress={() => onCardSelected(cardItem.subTopic, navigation)}
                        />
                    )
                })
            }
            </View>
        )
    })

    return (
        <View>{cardList}</View>
    )
}


export default class ExercisesScreen extends Component {
    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <HeadingContainer
                            headingImage={ExercisesIcon}
                            headingText='Excercises'
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
    cardContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: Constants.Paddings.containerP,
        backgroundColor: Constants.Colors.primaryBgColor
    },

    singleCardContainer: {
        flexDirection: 'row',
        height: height / 7,
        width: width - 20,
        marginTop: Constants.Margins.elementMT,
        backgroundColor: Constants.Colors.secondaryBgColor,
        borderRadius: Constants.BorderRadii.boxBR
    }
})