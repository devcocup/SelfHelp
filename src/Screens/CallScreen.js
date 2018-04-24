//React
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Communications from 'react-native-communications'
import { NavigationActions } from 'react-navigation'
import TwilioVoice from 'react-native-twilio-programmable-voice'

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

    constructor(props) {
        super(props)
    
        this.state = {
            buttonActivated: false,
            statusText: 'Initializing',
            isSpeakerDisabled: false,
            speakerText: 'Enable Speaker Phone'
        }
    }

    componentWillMount() {
        this.getAccessTokenFromServer()
    }

    // initialize the Programmable Voice SDK passing an access token obtained from the server.
    // Listen to deviceReady and deviceNotReady events to see whether the initialization succeeded.
    initTelephony(accessToken) {
        try {
            const success = TwilioVoice.initWithToken(accessToken)
            if (success) {
                this.setState({
                    buttonActivated: true,
                    statusText: 'Initialized'
                })
                TwilioVoice.connect({To: '+19542407338'})
            }
        } catch (err) {
            console.log(err)
        }
    }

    getTokenFinished(){
        return Promise.all(this.getAccessTokenFromServer)
    }

    getAccessTokenFromServer() {
        const url = 'https://voip.safehelpline.org/connect.php'
        fetch(url)
            .then((response) => response.text())
            .then(data => this.initTelephony(data))
            .catch((error) => {
                console.log(error)
            })
    }

    enableSpeaker = () => {
        // const { buttonActivated } = this.state

        // if (buttonActivated) {
        //     this.setState({
        //         statusText: 'Connecting'
        //     })
        // }
        if (this.state.isSpeakerDisabled) {
            this.setState({
                isSpeakerDisabled: false,
                speakerText: 'Enable Speaker Phone'
            })
        } else {
            this.setState({
                isSpeakerDisabled: true,
                speakerText: 'Disable Speaker Phone'
            })
        }
    }

    hangUpCall = (navigation) => {
        const { navigate } = navigation
        TwilioVoice.disconnect()
        navigate('MainScreen')
    }

    render() {
        const { enableSpeaker, hangUpCall } = this
        const { navigation } = this.props
        const { buttonActivated, statusText, speakerText } = this.state

        return(
           <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <View style={AppStyles.hCenter}>
                    <HeadingContainer
                        status={statusText}
                    />
                    <View
                        style={styles.container}
                        pointerEvents={buttonActivated ? 'auto' : 'none'}
                    >
                        <CardWithImage
                            cardImage={SpeakerIcon}
                            text={speakerText}
                            onPress={enableSpeaker}
                        />
                        <CardWithImage
                            cardImage={PhoneIcon}
                            text='Hang Up Call'
                            bgColor={Colors.red}
                            onPress={() => hangUpCall(navigation)}
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
