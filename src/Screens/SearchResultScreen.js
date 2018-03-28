// React
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import SearchResultPanel from '../Components/SearchResultPanel'

const { height, width } = Dimensions.get('window')
const {
    SearchResultLabels,
    Paddings,
    Colors,
    FontSizes
} = Constants


export default class SearchResultScreen extends Component {
    renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.label}</Text>
            </View>
        )
    }

    renderContent = (section) => {
        return (
            <View style={styles.content}>
            {
                section.subContent.map((item, index) => {
                    return (
                        <View>
                            <Text>{item.subLabel}</Text>
                        </View>
                    )
                })
            }
            </View>
        )
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                {
                    SearchResultLabels.map((item, index) => {
                        return (
                            <View
                                key={index}
                            >
                                {
                                    item.content.map((cardItem, cardIndex) => {
                                        return (
                                            <View
                                                key={cardIndex}
                                            >
                                                <SearchResultPanel
                                                    title={cardItem.label}
                                                >
                                                    <Text>Content</Text>
                                                </SearchResultPanel>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
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
