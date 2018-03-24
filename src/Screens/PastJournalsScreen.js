// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalTitleListItem from '../Components/JournalTitleListItem'

const onListClick = () => {
    console.log('list item clicked')
}

const ListContainer = () => {
    const list = Constants.PastJournalsLabels.map((item, index) => {
        return (
            <View key={index}>
                <JournalTitleListItem
                    checked={item.checked}
                    label={item.label}
                    onPress={onListClick}
                />
            </View>
        )
    })

    return (
        <View>{list}</View>
    )
}


export default class PastJournalsScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <ListContainer
                        navigation={navigation}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
