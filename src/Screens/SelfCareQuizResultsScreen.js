// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import  QuizHeadingContainer from '../Components/QuizHeadingContainer'
import CardWithImage from '../Components/CardWithImage'

const PhoneIcon = require('../Assets/Images/phone.png')

const { height, width } = Dimensions.get('window')
const { QuizResultsLabels, Margins, Paddings, Colors, FontSizes, BorderRadii } = Constants

const StatusCard = ({ status, frequency, onPress }) => {
    let bgColor = Colors.orange

    switch (frequency) {
        case 'Never':
            bgColor = Colors.orange
            break
        case 'Sometimes':
            bgColor = Colors.secondaryOrange
            break
        case 'Always':
            bgColor = Colors.secondaryGray
            break
        default:
            bgColor = Colors.orange
            break
    }

    return (
        <TouchableOpacity
            style={[styles.cardStyle, AppStyles.center, {backgroundColor: bgColor}]}
            onPress={onPress}
        >
            <Text style={styles.statusText}>{status}</Text>
            <View style={styles.separator}></View>
            <Text style={styles.frequencyText}>{frequency}</Text>
        </TouchableOpacity>
    )
}


export default class SelfCareQuizResultScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }

    callPhone = (navigation) => {
        const { navigate } = navigation
        navigate('TalkToSomeoneScreen')
    }

    onCardClicked = (navigation, status) => {
        const { navigate } = navigation
        navigate('SelfCareSuggestionScreen', { status: status })
    }

    render() {
        const { callPhone } = this 
        const { navigation } = this.props
        const { params } = navigation.state
        const { scoreValues } = params
        const quizTitle = 'Results'
        const quizSubTitleOne = ' Click buttons below to see suggestions for exercises that may help with those issues.'
        const quizSubTitleTwo = 'Areas that do not appear to be current stressors for you are marked in orange. Areas where you may need more support are indicated in gray.'

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <QuizHeadingContainer
                        quizTitle={quizTitle}
                        quizSubTitleOne={quizSubTitleOne}
                        quizSubTitleTwo={quizSubTitleTwo}
                        subTitleType='Description'
                    />
                    <View style={styles.cardArea}>
                    {
                        QuizResultsLabels.map((item, index) => {
                            let frequencyText = 'Never'
                            if (scoreValues[index] > 0 && scoreValues[index] <= 4) {
                                frequencyText = 'Sometimes'
                            } else if (scoreValues[index] === 5) {
                                frequencyText = 'Always'
                            }

                            return (
                                <StatusCard
                                    key={index}
                                    status={item.status}
                                    frequency={frequencyText}
                                    onPress={() => this.onCardClicked(navigation, item.status)}
                                />
                            )
                        })
                    }
                    </View>
                    <View style={AppStyles.hCenter}>
                        <CardWithImage
                            cardImage={PhoneIcon}
                            text='Talk to Someone'
                            onPress={() => callPhone(navigation)}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: Margins.elementM,
        marginTop: Margins.elementM
    },

    cardStyle: {
        width: width / 2 - 30,
        height: height / 9,
        margin: Margins.elementM,
        padding: Paddings.elementP,
        borderRadius: BorderRadii.boxBR
    },

    statusText: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        fontWeight: '600'
    },

    separator: {
        height: 2,
        width: width / 2 - 60,
        backgroundColor: 'white',
        marginVertical: 5
    },

    frequencyText: {
        color: 'white',
        fontSize: FontSizes.contentFS
    }
})
