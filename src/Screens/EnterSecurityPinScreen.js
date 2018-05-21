// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import localStorage from 'react-native-sync-localstorage'

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
            headerText: 'Enter your Security Pin',
            completed: false,
            mismatched: false,
            dotIndex: 0,
            typedPin: ''
        }
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    checkPin = (label, index, navigation) => {
        const { state } = navigation
        const { params } = state
        const { content } = params

        const securityPin = content.pin_number

        if (this.state.dotIndex === 5) {
            this.setState({
                completed: true
            })
            const toCheckPin = this.state.typedPin + label
            const checkedPin =  securityPin ? (securityPin === toCheckPin ? true : false) : false
            
            if (checkedPin) {
                this.goToScreen('SelfCareScreen', navigation)
            } else {
                this.setState({
                    mismatched: true,
                    headerText: 'Incorrect,\nplease try again.',
                    dotIndex: 0,
                    typedPin: ''
                })
            }
        } else {
            this.setState({
                dotIndex: this.state.dotIndex + 1,
                typedPin: this.state.typedPin + label
            })
        }
    }

    onPanelClicked = (label, index, navigation) => {
        if (label === 'Clear') {
            this.setState({
                dotIndex: 0,
                typedPin: ''
            })
        } else {
            this.checkPin(label, index, navigation)
        }
    }

    render() {
        const { navigation } = this.props
        const { mismatched, headerText, dotIndex } = this.state


        return (
            <View style={AppStyles.mainContainer}>
                {
                    !mismatched &&
                    <SecurityPinHeader
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
                <View style={[styles.bodyContainer, {alignItems: 'center', }]}>
                    <View style={styles.headerTextArea}>
                        <Text style={styles.headerText}>{headerText}</Text>
                    </View>
                    <View style={styles.dotArea}>
                        <PinDots dotIndex={dotIndex} />
                    </View>
                  <View style={{justifyContent: 'center', flex: 1}}>
                    <View style={styles.newPanelArea}>
                    {
                        PanelLabels.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.panel, AppStyles.center]}
                                    onPress={() => this.onPanelClicked(item, dotIndex, navigation)}
                                >
                                    <Text style={styles.panelText}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                  </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
      flex: 1,
    },

    headerTextArea: {
        height: 40,
        justifyContent: 'flex-end'
    },

    headerText: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600',
        textAlign: 'center'
    },

    dotArea: {
        width: width * 0.6,
        height: 60
    },

    panelArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width * 0.58,
        marginTop: height * 0.02,
    },
    newPanelArea: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 10,
      marginLeft: 20,
      paddingVertical: 10,
      justifyContent: "flex-start",
      alignItems: "center"
    },

    panel: {
        width: width * 0.270,
        height: width * 0.270,
        borderRadius: BorderRadii.buttonBR,
        backgroundColor: Colors.darkGreen,
      marginRight: 5,
      marginBottom: 5,

    },

    panelText: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        fontWeight: '600'
    },
})
