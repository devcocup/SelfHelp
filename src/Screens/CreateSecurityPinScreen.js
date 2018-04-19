// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'


// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'
import Circle from '../Components/Circle'
import PinDots from '../Components/PinDots'

const { height, width } = Dimensions.get('window')
const { PanelLabels, Paddings, FontSizes, Colors, BorderRadii } = Constants


export default class CreateSecurityPinScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            completed: false,
            dotIndex: 0,
            pinNumber: ''
        }
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName, {pinNumber: this.state.pinNumber.substring(0, 6)})
    }

    onNumberClicked = (label, navigation) => {
        // if (this.state.completed === true) {
        //     this.goToScreen('ConfirmSecurityPinScreen', navigation)
        // }
        this.setState({
            pinNumber: this.state.pinNumber + label
        })
        if (this.state.dotIndex === 6) {
            this.setState({
                completed: true
            })
            this.goToScreen('ConfirmSecurityPinScreen', navigation)
        }
        this.setState({
            dotIndex: this.state.dotIndex + 1
        })
    }

    render() {
        const { navigation } = this.props
        const { dotIndex } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <SecurityPinHeader
                    headerType='FLOW'
                    flowIndex={1}
                    navigation={navigation}
                />
                <View style={[styles.bodyContainer, AppStyles.hCenter]}>
                    <Text style={styles.title}>Create a Security Pin</Text>
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
                                    onPress={() => this.onNumberClicked(item, navigation)}
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
