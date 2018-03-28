// React
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const DownArrowIcon = require('../Assets/Images/down_arrow.png')

const { height, width } = Dimensions.get('window')
const {
    SearchResultLabels,
    Paddings,
    Colors,
    FontSizes
} = Constants


const cardContent = () => {
    return (
        <View>
            {

            }
        </View>
    )
}

const ListContainer = ({ navigation }) => {
    const list = SearchResultLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
            {
                item.content.map((cardItem, cardIndex) => {
                    return (
                        <View
                            key={cardIndex}
                            style={[styles.cardItem, AppStyles.hCenter]}>
                            <View style={styles.cardTitleArea}>
                                <View style={[styles.checkMarkArea, AppStyles.center]}>
                                    <TouchableOpacity
                                        onPress={() => onItemSelected}
                                    >
                                        <Image source={DownArrowIcon} style={styles.checkMark} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.textArea}>
                                    <Text style={styles.cardText}>{ cardItem.label }</Text>
                                </View>
                            </View>
                            {
                                <View>
                                    {cardContent}
                                </View>
                            }
                        </View>
                    )
                })
            }
            </View>
        )
    })

    return (
        <View>{list}</View>
    )
}


export default class SearchResultScreen extends Component {
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
    cardContainer: {
        width
    },

    cardItem: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen,
        paddingVertical: Paddings.listPV,
        paddingHorizontal: Paddings.listPH
    },

    checkMarkArea: {
        flex: .15
    },

    checkMark: {
        width: 40,
        height: 40
    },

    textArea: {
        flex: .85
    },

    cardText: {
        color: 'white',
        fontSize: FontSizes.listFS,
        fontWeight: '600'
    }
})
