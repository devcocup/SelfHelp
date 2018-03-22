// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import TopicButton from '../Components/TopicButton'
import SingleCard from '../Components/SingleCard'

const CardContainer = ({ navigation }) => {
    const subTopic = navigation.state.params.subTopic

    const cardList = Constants.SoothingSoundsLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.CardContainer, AppStyles.hCenter]}
            >
                <TopicButton text={subTopic} />
                {
                    item.content.map((cardItem, cardIndex) => {
                        return (
                            <SingleCard
                                key={cardIndex}
                                cardContent={cardItem}
                                onPress={() => onCardSelected((cardItem.subTopic, navigation))}
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


export default class SoothingSoundsScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation='navigation'
                />
                <View style={{ flex: 1 }}>
                    <ScrollView>
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
