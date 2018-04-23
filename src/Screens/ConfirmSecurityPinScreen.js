// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import localStorage from 'react-native-sync-localstorage'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'
import PinDots from '../Components/PinDots'

const { height, width } = Dimensions.get('window')
const { PanelLabels, Paddings, FontSizes, Colors, BorderRadii } = Constants


export default class ConfirmSecurityPinScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            completed: false,
            confirmingPin: '',
            mismatched: false,
            dotIndex: 0,
            headerText: 'Confirm your pin'
        }
    }

    componentDidMount() {
        const { navigation } = this.props
        const { params } = navigation.state
        const { pinNumber } = params

        this.setState({
            confirmingPin: pinNumber
        })
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    onNumberClicked = (label, index, navigation) => {
        const { confirmingPin } = this.state
        let checkedPin =  confirmingPin ? (confirmingPin.substr(index, 1).includes(label) ? true : false) : false

        if (this.state.dotIndex === 5) {
            this.setState({
                completed: true
            })
            localStorage.setItem('PIN', confirmingPin)
            // this.goToScreen('AnswerSecurityQuestionScreen', navigation)
            this.goToScreen('CreateSecurityQuestionScreen', navigation)
        }
        if (checkedPin) {
            this.setState({
                dotIndex: this.state.dotIndex + 1
            })
        } else {
            this.setState({
                mismatched: true,
                headerText: 'Incorrect,\nplease try again.'
            })
        }
        // this.goToScreen('CreateSecurityQuestionScreen', navigation)
    }

    render() {
        const { dotIndex, mismatched, headerText } = this.state
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
                {
                    !mismatched && 
                    <SecurityPinHeader
                        headerType='FLOW'
                        flowIndex={2}
                        navigation={navigation}
                    />
                }
                {
                    mismatched &&
                    <SecurityPinHeader
                        headerType='RESET'
                        navigation={navigation}
                    />   
                }
                <View style={[styles.bodyContainer, AppStyles.hCenter]}>
                    <Text style={styles.title}>{headerText}</Text>
                    <View style={styles.dotArea}>
                        <PinDots dotIndex={dotIndex} />
                    </View>
                    <View style={styles.panelArea}>
                    {
                        PanelLabels.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.panel, AppStyles.center]}
                                    onPress={() => this.onNumberClicked(item, dotIndex, navigation)}
                                >
                                    <Text style={styles.title}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        padding: Paddings.lP
    },

    title: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600'
    },

    dotArea: {
        width: width - 140,
        height: 60
    },

    panelArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width * 4 / 5 - width / 10
    },

    panel: {
        width: width / 5,
        height: width / 5,
        borderRadius: BorderRadii.buttonBR,
        backgroundColor: Colors.darkGreen,
        margin: 5
    }
})
