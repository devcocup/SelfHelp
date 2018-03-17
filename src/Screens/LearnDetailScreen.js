// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import TopicButton from '../Components/TopicButton'
import SubTopicButton from '../Components/SubTopicButton'

const CardContainer = ({ content }) => {
    const cardList = content.subContent.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
                <SubTopicButton text={item} />
            </View>
        )
    })

    return (
        <View style={AppStyles.hCenter}>
            <TopicButton text={content.subTopic} />
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
        backgroundColor: "#208167"
    },
})