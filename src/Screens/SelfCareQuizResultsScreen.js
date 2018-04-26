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
        <TouchableOpacity style={[styles.cardStyle, AppStyles.center, {backgroundColor: bgColor}]}>
            <Text style={styles.statusText}>{status}</Text>
            <View style={styles.separator}></View>
            <Text style={styles.frequencyText}>{frequency}</Text>
        </TouchableOpacity>
    )
}


export default class SelfCareQuizResultScreen extends Component {
    callPhone = (navigation) => {
        const { navigate } = navigation
        navigate('TalkToSomeoneScreen')
    }

    render() {
        const { callPhone } = this 
        const { navigation } = this.props
        const quizTitle = 'Results'
        const quizSubTitle = ' Click buttons below to see suggestions for exercises that may help with those issues.'

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <QuizHeadingContainer
                        quizTitle={quizTitle}
                        quizSubTitle={quizSubTitle}
                        subTitleType='Description'
                    />
                    <View style={styles.cardArea}>
                    {
                        QuizResultsLabels.map((item, index) => {
                            return (
                                <StatusCard
                                    key={index}
                                    status={item.status}
                                    frequency={item.frequency}
                                    onPress={this.onCardClicked}
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
