// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import TopicButton from '../Components/TopicButton'
import SubTopicButton from '../Components/SubTopicButton'
import RedirectButton from '../Components/RedirectButton'

const { height, width } = Dimensions.get('window')
const { Paddings, FontSizes } = Constants

onRedirect = (url, navigation) => {
    const { navigate } = navigation
    navigate('LearnRedirectScreen', { url })
}

const CardContainer = ({ content, navigation }) => {
    const cardDescriptionBox = content.subContent.subDescription.map((item, index) => {
        return (
            <Text
                key={index}
                style={styles.descriptionText}
            >
                {item}
            </Text>
        )
    })

    const cardList = content.subContent.subCategories.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
                {
                    !item.url &&
                    <SubTopicButton content={item} />
                }
                {
                    item.url &&
                    <RedirectButton content={item} onPress={() => onRedirect(item.url, navigation)} />
                }
            </View>
        )
    })

    return (
        <View style={AppStyles.hCenter}>
            <TopicButton text={content.subTopic} />
            <View style={styles.descriptionArea}>
                {cardDescriptionBox}
            </View>
            {cardList}
        </View>
    )
}

export default class LearnDetailScreen extends Component {
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
                        content={navigation.state.params}
                        navigation={navigation}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    descriptionArea: {
        padding: Paddings.containerP
    },

    descriptionText: {
        color: 'white'
    },

    cardContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#208167"
    },
})