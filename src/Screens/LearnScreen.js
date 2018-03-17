// React
import React, { Component } from 'react'
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import TopicButton from '../Components/TopicButton'
import SingleCard from '../Components/SingleCard'

const LearnIcon = require('../Assets/Images/learn_orange.png')

const { height, width } = Dimensions.get("window")

const goToScreen = (ScreenName, navigation, subTopic, subContent) => {
    const { state, navigate } = navigation
    navigate(ScreenName, { subTopic, subContent })
}

const onLearnDetail = (navigation, subTopic, subContent) => {
    switch (subTopic) {
        case 'What can I do to help?':
            goToScreen('WhatCanIDoScreen', navigation, subTopic, subContent)
            break
        default:
            goToScreen('LearnDetailScreen', navigation, subTopic, subContent)
            break
    }
}

const CardContainer = ({ navigation }) => {
    const cardList = Constants.LearnLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
                <TopicButton text={item.topic} />
                {
                    item.content.map((cardItem, cardIndex) => {
                        return (
                            <SingleCard
                                key={cardIndex}
                                cardContent={cardItem}
                                onPress={() => onLearnDetail(navigation, cardItem.subTopic, cardItem.subContent)}
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

export default class LearnScreen extends Component {
    static navigationOptions = {
        title: 'Plan Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'}
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <View style={{ backgroundColor: "#208167", flex: 1 }}>
                    <View style={{ height: height - 64, width }}>
                        <View style={{ flex: 1 }}>
                            <ScrollView>
                                <HeadingContainer
                                    headingImage={LearnIcon}
                                    headingText='Learn'
                                />
                                <CardContainer
                                    navigation={navigation}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    cardContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#208167"
    },

    singleCardContainer: {
        height: height / 7,
        marginTop: 10,
        width: width - 20,
        backgroundColor: "#2C8D77",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        flexDirection: "row",
        overflow: "hidden"
    }
})
