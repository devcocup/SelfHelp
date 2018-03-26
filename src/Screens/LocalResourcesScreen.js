// React
import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'

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


export default class LocalResourcesScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            locationSearchText: ''
        }
    }

    onCategorySelected = (cardText) => {
        console.log('card clicked')
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
                                            <TouchableOpacity
                                                key={cardIndex}
                                                onPress={() => this.onCategorySelected(cardItem.label)}>
                                                <View
                                                    style={[styles.categoryCard, AppStyles.center]}
                                                >
                                                    <Text style={styles.cardText}>{cardItem.label}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                )
                            })
                        }
                        </View>
                        <View style={styles.buttonArea}>
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
        padding: Paddings.containerP
    },

    locationInputArea: {
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: Margins.elementMT
    },

    categoryCard: {
        width: width / 4 - 20,
        height: height / 10,
        backgroundColor: Colors.darkGreen,
        borderRadius: BorderRadii.boxBR,
        margin: 5
    },

    cardText: {
        color: 'white',
        textAlign: 'center',
        fontSize: FontSizes.listFS,
        fontWeight: '600'
    },

    buttonArea: {

    }
})
