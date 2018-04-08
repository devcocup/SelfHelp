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
const { Margins, Paddings, Colors, FontSizes } = Constants


export default class SelfCareQuizResultScreen extends Component {
    render() {
        const { navigation } = this.props
        const quizTitle = 'Results'
        const subQuizTitle = ' CLick buttons below to see suggestions for exercises that may help with those issues.'

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <QuizHeadingContainer
                        quizTitle={quizTitle}
                        subQuizTitle={subQuizTitle}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
