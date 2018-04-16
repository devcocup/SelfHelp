//React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Communications from 'react-native-communications'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeaderStrip from '../Components/HeaderStrip'
import HeadingContainer from '../Components/HeadingContainer'
import CardWithImage from '../Components/CardWithImage'

const SearchIcon = require('../Assets/Images/search_orange.png')

const { height, width } = Dimensions.get('window')
const { SearchLabels, Paddings, Colors } = Constants

const goToScreen = (ScreenName, cardTitle, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName, { cardTitle })
}

const onPress = (cardTitle, navigation) => {
    let ScreenName = ''

    switch (cardTitle) {
        case 'Local Resources':
            ScreenName = 'LocalResourcesScreen'
            goToScreen(ScreenName, cardTitle, navigation)
            break
        case 'Talk to Someone':
            Communications.phonecall('18779955247', true)
            break
        default:
            break
    }
}

const CardContainer = ({ navigation }) => {
    const cardList = SearchLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
                {
                    item.content.map((cardItem, cardIndex) => {
                        return (
                            <CardWithImage
                                key={cardIndex}
                                cardImage={cardItem.icon}
                                text={cardItem.label}
                                onPress={() => onPress(cardItem.label, navigation)}
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


export default class SearchScreen extends Component {
    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <HeaderStrip
                    index={5}
                />
                <ScrollView>
                    <HeadingContainer
                        headingImage={SearchIcon}
                        headingText='Search'
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
        paddingHorizontal: Paddings.elementP,
        paddingVertical: Paddings.elementP,
        backgroundColor: Colors.primaryBgColor
    }
})
