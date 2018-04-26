// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import localStorage from 'react-native-sync-localstorage'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeaderStrip from '../Components/HeaderStrip'
import HeadingContainer from '../Components/HeadingContainer'
import CardWithImage from '../Components/CardWithImage'

const SelfCareIcon = require('../Assets/Images/self_care_orange.png')
const NewPlanIcon = require('../Assets/Images/create_a_plan.png')
const BrowseIcon = require('../Assets/Images/browse_past_plans.png')

const { height, width } = Dimensions.get('window')
const { Colors, FontSizes } = Constants

goToScreen = (ScreenName, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName)
}

onCreateNew = (navigation) => {
    goToScreen('SelfCareQuizScreen', navigation)
}

onBrowse = (navigation) => {
    goToScreen('PastPlansScreen', navigation)
}

onJournalClicked = (navigation) => {
    const value = localStorage.getItem('PIN')

    if (value === null || value === undefined) {
        goToScreen('CreateSecurityPinScreen', navigation)
    } else {
        goToScreen('EnterSecurityPinScreen', navigation)
    }
}

onColoringBookClicked = (navigation) => {
    goToScreen('ColoringBookScreen', navigation)
}

const CardWithoutImage = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonWithoutImage, AppStyles.center]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CardContainer = ({ navigation }) => {
    return (
        <View style={[styles.cardContainer, AppStyles.hCenter]}>
            <CardWithImage
                cardImage={NewPlanIcon}
                text='Create a new plan'
                onPress={() => onCreateNew(navigation)}
            />
            <CardWithImage
                cardImage={BrowseIcon}
                text='Browse past plans'
                onPress={() => onBrowse(navigation)}
            />
            <View style={styles.boxWithoutImageArea}>
                <CardWithoutImage
                    text='Journal'
                    onPress={() => onJournalClicked(navigation)}
                />
                <CardWithoutImage
                    text='Coloring Book'
                    onPress={() => onColoringBookClicked(navigation)}
                />
            </View>
        </View>
    )
}

export default class SelfCareScreen extends Component {
    static navigationOptions = {
        title: 'Self-Care Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'},
    }

    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <HeaderStrip
                    index={3}
                />
                <ScrollView>
                    <HeadingContainer
                        headingImage={SelfCareIcon}
                        headingText='Self-Care'
                    />
                    <CardContainer
                        navigation={navigation}
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
        backgroundColor: Colors.primaryBgColor
    },

    boxWithoutImageArea: {
        flexDirection: 'row',
        width: width - 40,
        justifyContent: 'space-between'
    },

    buttonWithoutImage: {
        height: height / 6,
        width: width / 2 - 30,
        marginTop: 15,
        backgroundColor: Colors.lightGreen,
        borderRadius: 4
    },

    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: FontSizes.topicFS
    }
})
