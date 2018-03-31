// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, Colors, FontSizes } = Constants

const Button = ({ label, bgColor, onPress }) => {
    const inheritedStyle = {
        backgroundColor: bgColor
    }

    const textColor = {
        color: bgColor === 'white' ? 'black' : 'white'
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonStyle, inheritedStyle]}>
                <Text style={[styles.textStyle, textColor]}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default class ReviewInfoScreen extends Component {
    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    onBackClicked = (navigation) => {
        this.goToScreen('CreateSecurityQuestionScreen', navigation)
    }

    onCorrectClicked = (navigation) => {
        this.goToScreen('SecurityPinFinishScreen', navigation)
    }

    render() {
        const { navigation } = this.props
        const questionText = 'What was the name of the street that you grew up on?'
        const answerText = 'Tovito Dr'

        return (
            <View style={AppStyles.mainContainer}>
                <SecurityPinHeader
                    headerType='FLOW'
                    flowIndex={4}
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>
                            Review your information:
                        </Text>
                    </View>
                    <View style={styles.questionArea}>
                        <Text style={styles.title}>Question:</Text>
                        <Text style={styles.content}>{questionText}</Text>
                    </View>
                    <View style={styles.answerArea}>
                        <Text style={styles.title}>Answer:</Text>
                        <Text style={styles.content}>{answerText}</Text>
                    </View>
                    <View style={[styles.buttonArea, AppStyles.hCenter]}>
                        <Button
                            label='Back'
                            bgColor='white'
                            onPress={() => this.onBackClicked(navigation)}
                        />
                        <Button
                            label='Correct'
                            bgColor='white'
                            onPress={() => this.onCorrectClicked(navigation)}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.lP,
        paddingHorizontal: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    title: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600',
        textAlign: 'center'
    },

    questionArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    content: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: Margins.containerM
    },

    answerArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Paddings.containerP,
        marginHorizontal: Margins.containerM
    },

    buttonStyle: {
        width: width / 2 - 40,
        height: 65,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },

    textStyle: {
        fontSize: 23,
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold'
    }
})
