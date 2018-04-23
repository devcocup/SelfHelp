// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeaderStrip from '../Components/HeaderStrip'
import HeadingContainer from '../Components/HeadingContainer'
import SingleCard from '../Components/SingleCard'

const ExercisesIcon = require('../Assets/Images/exercises_orange.png')

const { height, width } = Dimensions.get('window')

const goToScreen = (ScreenName, content, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName, { content })
}

const onCardSelected = (content, navigation) => {
    let ScreenName = ''

    switch (content.subTopic) {
        case 'Listening to Soothing Sounds':
            ScreenName = 'SoothingSoundsScreen'
            break
        default:
            ScreenName = 'ExerciseDetailScreen'
            break
    }

    goToScreen(ScreenName, content, navigation)
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
                            onPress={() => onCardSelected(cardItem, navigation)}
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

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <HeaderStrip
                    index={4}
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