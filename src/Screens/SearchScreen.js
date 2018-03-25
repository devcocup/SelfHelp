//React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import CardWithImage from '../Components/CardWithImage'

const SearchIcon = require('../Assets/Images/search_orange.png')

const { height, width } = Dimensions.get('window')
const { SearchLabels, Paddings, Colors } = Constants

const onPress = (navigation) => {
    console.log('card clicked')
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
                                onPress={() => onPress(navigation)}
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
