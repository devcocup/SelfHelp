// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import  QuizHeadingContainer from '../Components/QuizHeadingContainer'

const { height, width } = Dimensions.get('window')
const { QuizResultsLabels, Margins, Paddings, Colors, FontSizes } = Constants

const StatusCard = ({ status, frequency, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.cardStyle}>
                <Text style={styles.statusText}>{status}</Text>
                <View style={styles.separator}></View>
                <Text style={styles.frequencyText}>{frequency}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default class SelfCareQuizResultScreen extends Component {
    render() {
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
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardArea: {
        flexWrap: 'wrap'
    }
})
