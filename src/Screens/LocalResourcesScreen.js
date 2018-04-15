// React
import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import LocalSearchLabelCard from '../Components/LocalSearchLabelCard'

const SearchIcon = require('../Assets/Images/search_orange.png')

const { height, width } = Dimensions.get('window')
const {
    Paddings,
    Margins,
    FontSizes,
    Colors,
    BorderRadii,
    LocalSearchCategoryLabels
} = Constants

let searchLabelActives = []

export default class LocalResourcesScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            locationSearchText: '',
            services: []
        }
    }

    onSearchClicked = (navigation) => {
        const { navigate } = navigation
        const { locationSearchText, services } = this.state
        const servicesQuery = searchLabelActives.join(',')
        navigate('SearchResultScreen', {locationSearchText, servicesQuery})
    }

    onCardSelected = (cardIndex) => {
        if (searchLabelActives.indexOf((cardIndex + 1).toString()) < 0) {
            searchLabelActives.push((cardIndex + 1).toString())
        } else {
            searchLabelActives.splice(cardIndex, 1)
        }
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
                    <HeadingContainer
                        headingImage={SearchIcon}
                        headingText={navigation.state.params.cardTitle}
                    />
                    <View style={[styles.inputContainer, AppStyles.hCenter]}>
                        <View style={styles.locationInputArea}>
                            <Text style={styles.hintText}>Enter your location info:</Text>
                            <TextInput
                                style={styles.inputBox}
                                underlineColorAndroid='rgba(0, 0, 0, 0)'
                                placeholder='Zip Code, State, Country, Installation/Base'
                                onChangeText={(locationSearchText) => this.setState({ locationSearchText })}
                                value={this.state.locationSearchText}
                            />
                        </View>
                        <View style={styles.categortyInputArea}>
                        {
                            LocalSearchCategoryLabels.map((item, index) => {
                                return (
                                    item.content.map((cardItem, cardIndex) => {
                                        return (
                                            <LocalSearchLabelCard
                                                key={cardIndex}
                                                content={cardItem.label}
                                                onCardSelect={() => this.onCardSelected(cardIndex)}
                                            />
                                        )
                                    })
                                )
                            })
                        }
                        </View>
                        <View style={styles.buttonArea}>
                            <TouchableOpacity
                                onPress={() => this.onSearchClicked(navigation)}
                            >
                                <View style={[styles.searchButton, AppStyles.center]}>
                                    <Text style={styles.searchButtonText}>Search</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        height: height * 3 / 4 - 64,
        padding: Paddings.containerP
    },

    locationInputArea: {
        flex: .2,
        flexDirection: 'column'
    },

    hintText: {
        color: 'white',
        fontSize: FontSizes.hintFS,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: Margins.elementMB
    },

    inputBox: {
        height: 40,
        width: width - 50,
        backgroundColor: 'white',
        textAlign: 'center'
    },

    categortyInputArea: {
        flex: .5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: Margins.elementMT
    },

    buttonArea: {
        flex: .3
    },

    searchButton: {
        width: width - 50,
        height: height / 6,
        backgroundColor: Colors.lightGreen,
        borderRadius: BorderRadii.boxBR
    },

    searchButtonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600'
    }
})
