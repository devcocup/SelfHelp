// React
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const maleIcon = require('../Assets/Images/male.png')
const femaleIcon = require('../Assets/Images/female.png')

const { height, width } = Dimensions.get('window')

const NoteContainer = () => {
    const { title, content } = Constants.AtTheBeachLabels

    return (
        <View style={styles.noteContainer}>
            <Text style={styles.titleText}>
                {title}
            </Text>
            <View style={AppStyles.hCenter}>
                <View style={styles.separateBar} />
            </View>
            <Text style={styles.contentText}>
                {content}
            </Text>
        </View>
    )
}

const GenderBox = ({ imgSrc }) => {
    return (
        <View style={[styles.genderBox, AppStyles.center]}>
            <Image source={imgSrc} style={styles.avatar}/>
        </View>
    )
}

const GenderBoxContainer = () => {
    return (
        <View style={styles.genderBoxContainer}>
            <GenderBox imgSrc={maleIcon} />
            <GenderBox imgSrc={femaleIcon} />
        </View>
    )
}


export default class AtTheBeachScreen extends Component {
    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <View  style={{ height: height - 64, padding: 40 }}>
                        <View style={{flex: 1}}>
                            <View style={[{ flex: .75 }, AppStyles.hCenter]}>
                                <NoteContainer />
                            </View>
                            <View style={[{ flex: .25}, AppStyles.hCenter, AppStyles.vEnd]}>
                                <GenderBoxContainer />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noteContainer: {
        width: width - 40,
        marginTop: Constants.Margins.containerM,
        padding: Constants.Paddings.containerP,
        backgroundColor: Constants.Colors.gray,
        borderRadius: Constants.BorderRadii.boxBR
    },

    titleText: {
        color: 'white',
        fontSize: Constants.FontSizes.quizTitleFS,
        fontWeight: '600',
        textAlign: 'left',
        marginBottom : 10
    },

    separateBar: {
        height: 2,
        width: width - 80,
        backgroundColor: 'white'
    },

    contentText: {
        color: 'white',
        marginTop: 10,
    },

    genderBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 40
    },

    genderBox: {
        width: width / 2 - 30,
        height: height / 6,
        backgroundColor: 'green',
        borderRadius: Constants.BorderRadii.boxBR
    },

    avatar: {
        width: 80,
        height: 90
    }
})
