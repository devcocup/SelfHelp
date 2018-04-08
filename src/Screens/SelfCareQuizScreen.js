// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Slider } from 'react-native-elements'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, Colors, BorderRadii } = Constants

const quizTitle = 'Question 1'
const quizSubTitle = 'How often do you feel sad?'

const QuizHeadingContainer = () => {
    return (
        <View style={[styles.headingContainer, AppStyles.center]}>
            <Text style={styles.titleText}>
                {quizTitle}
            </Text>
            <View style={styles.separateBar}></View>
            <Text style={styles.subTitleText}>
                {quizSubTitle}
            </Text>
        </View>
    )
}

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={[styles.buttonStyle, AppStyles.center]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default class SelfCareQuizScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            scoreValue: 0
        }
    }

    onSliderChange(value) {
        this.setState({
            scoreValue: Math.floor(value)
        })
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    onSkip = (navigation) => {
        console.log('skip clicked')
    }

    onContinue = (navigation) => {
        this.goToScreen('SelfCareQuizResultsScreen', navigation)
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
                    <View style={AppStyles.hCenter}>
                        <QuizHeadingContainer />
                        <View style={[styles.scoreArea, AppStyles.center]}>
                            <Text style={styles.scoreText}>{this.state.scoreValue}</Text>
                        </View>
                        <View style={styles.sliderArea}>
                            <Slider
                                value={this.state.scoreValue}
                                maximumValue={5}
                                trackStyle={styles.trackStyle}
                                minimumTrackTintColor={Colors.orange}
                                thumbStyle={styles.thumbStyle}
                                onValueChange={(value) => this.onSliderChange(value)}
                            />
                            <View style={styles.statusTextArea}>
                                <Text style={styles.statusText}>Never</Text>
                                <Text style={styles.statusText}>Sometimes</Text>
                                <Text style={styles.statusText}>Always</Text>
                            </View>
                        </View>
                        <View style={styles.buttonArea}>
                            <Button
                                text='Skip'
                                onPress={() => this.onSkip(navigation)}
                            />
                            <Button
                                text='Continue'
                                onPress={() => this.onContinue(navigation)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headingContainer: {
        height: height / 4,
        width,
        backgroundColor: 'white'
    },

    titleText: {
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginBottom: 10
    },

    separateBar: {
        height: 2,
        width: width - 60,
        backgroundColor: Colors.orange
    },

    subTitleText: {
        color: Colors.gray,
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginTop: 10
    },

    scoreArea: {
        width: width - 40,
        height: 80,
        backgroundColor: Colors.orange,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.containerM
    },

    scoreText: {
        color: 'white',
        fontSize: FontSizes.headingFS,
        fontWeight: 'bold'
    },

    sliderArea: {
        flex: 1,
        width: width - 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkGreen,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.containerM,
        padding: Paddings.containerP
    },

    trackStyle: {
        width: width - 120,
        height: 5
    },

    thumbStyle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 40
    },

    statusTextArea: {
        flexDirection: 'row',
        width: width - 80,
        justifyContent: 'space-between',
        padding: Paddings.elementP,
        marginTop: Margins.containerM
    },

    statusText: {
        color: 'white',
        fontSize: FontSizes.textContentFS,
        fontWeight: 'bold'
    },

    buttonArea: {
        flexDirection: 'row',
        width: width - 40,
        justifyContent: 'space-between'
    },

    buttonStyle: {
        height: height / 5,
        width: width / 2 - 30,
        marginTop: Margins.containerM,
        backgroundColor: Colors.lightGreen,
        borderRadius: BorderRadii.boxBR
    },

    buttonText: {
        color: 'white',
        fontSize: FontSizes.textContentFS,
        fontWeight: 'bold'
    }
})
