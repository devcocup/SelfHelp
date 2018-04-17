//React
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Communications from 'react-native-communications'
import { NavigationActions } from 'react-navigation'
import PhoneInput from 'react-native-phone-input'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import CardWithImage from '../Components/CardWithImage'

const SpeakerIcon = require('../Assets/Images/speaker.png')
const PhoneIcon = require('../Assets/Images/phone.png')

const { height, width } = Dimensions.get('window')
const { Paddings, Margins, Colors, FontSizes, BorderRadii } = Constants

const HeadingContainer = ({ status }) => {
    const titleText = 'Internet Call'

    return (
        <View style={[styles.headingContainer, AppStyles.center]}>
            <Text style={styles.statusText}>
                {status}
            </Text>
            <View style={styles.separateBar}></View>
            <Text style={styles.titleText}>
                {titleText}
            </Text>
        </View>
    )
}


export default class CallScreen extends Component {
    static navigationOptions = {
        title: 'Call Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'}
    }

    callPhone = () => {
        const { formattedNumber } = this.phone.state
        Communications.phonecall(formattedNumber, true)
    }

    render() {
        const { navigation } = this.props

        return(
           <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <View style={AppStyles.hCenter}>
                    <HeadingContainer
                        status='Connecting'
                    />
                    <View style={styles.container}>
                        <CardWithImage
                            cardImage={SpeakerIcon}
                            text='Enable Speaker Phone'
                            onPress={() => this.enableSpeaker}
                        />
                        <CardWithImage
                            cardImage={PhoneIcon}
                            text='Hang Up Call'
                            bgColor={Colors.red}
                            onPress={() => this.hangUpCall}
                        />
                    </View>                    
                </View>
           </View>    

        )
    }
}

const styles = StyleSheet.create({
    container: {
        // padding: Paddings.lP
    },

    headingContainer: {
        height: height / 4,
        width,
        backgroundColor: 'white',
    },

    statusText: {
        fontSize: FontSizes.quizTitleFS,
        fontWeight: '600',
        marginBottom: 10,
        color: Colors.orange
    },

    separateBar: {
        height: 2,
        width: width - 160,
        backgroundColor: Colors.gray
    },

    titleText: {
        color: 'black',
        fontSize: FontSizes.headingFS,
        fontWeight: '600',
        marginTop: 10
    },

    numberField: {
        width: width - 80,
        height: 40,
        borderRadius: BorderRadii.boxBR,
        backgroundColor: 'white'
    },

    callButton: {
        width: width / 3,
        height: 50,
        backgroundColor: Colors.red,
        borderRadius: BorderRadii.buttonBR,
        marginTop: Margins.elementMT
    },

    callButtonText: {
        color: 'white',
        fontSize: FontSizes.contentFS,
        fontWeight: 'bold'
    }
})
