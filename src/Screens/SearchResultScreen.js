// React
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import SearchResultPanel from '../Components/SearchResultPanel'

const CallIcon = require('../Assets/Images/call_button.png')

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
                                                {
                                                    cardItem.subContent && cardItem.subContent.map((subItem, subIndex) => {
                                                        return (
                                                            <View
                                                                key={subIndex}
                                                                style={styles.panelItem}>
                                                                <View style={styles.panelItemTextArea}>
                                                                    <Text>{subItem.subLabel}</Text>
                                                                    <Text>{subItem.phoneNumber}</Text>
                                                                    <Text>{subItem.location}</Text>
                                                                </View>
                                                                <View style={styles.panelItemButton}>
                                                                    <TouchableOpacity
                                                                        style={[styles.callButton, AppStyles.center]}
                                                                    >
                                                                        <Image
                                                                            source={CallIcon}
                                                                            style={styles.callButtonImage}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        )
                                                    })
                                                }
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
    },

    panelItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    panelItemTextArea: {
        flex: .8
    },

    panelItemButton: {
        flex: .2
    },

    callButton: {
        backgroundColor: Colors.lightGray,
        width: 50,
        height: 50,
        borderRadius: 50
    },

    callButtonImage: {
        width: 40,
        height: 40
    }
})
