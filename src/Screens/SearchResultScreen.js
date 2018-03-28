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

const ListContainer = ({ navigation }) => {
    const list = SearchResultLabels.map((item, index) => {
        return (
            <View
                key={index}
                style={[styles.cardContainer, AppStyles.hCenter]}
            >
            {/*
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
                        </View>
                    )
                })
            */}

                <Accordion
                    sections={item.content}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                />
            </View>
        )
    })

    return (
        <View>{list}</View>
    )
}


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
                    {/*
                        SearchResultLabels.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={[styles.cardContainer, AppStyles.hCenter]}
                                >
                                    <Accordion
                                        sections={item.content}
                                        renderHeader={this.renderHeader}
                                        renderContent={this.renderContent}
                                    />
                                </View>
                            )
                        })
                    */}
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
