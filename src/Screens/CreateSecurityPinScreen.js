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
            pinNumber: ''
        }
    }

    componentDidUpdate = () => {
      if (this.state.pinNumber.length === 6) {
        this.goToScreen('ConfirmSecurityPinScreen', this.props.navigation)
      }
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName, {pinNumber: this.state.pinNumber.substring(0, 6)})
    }

    onNumberClicked = (label) => {
        if (label === 'Clear') {
          this.setState(() => ({ pinNumber: '' }));
        } else {
          this.setState((prevState) => ({...prevState, pinNumber: prevState.pinNumber + label}))
        }
    };

    render() {
        const { navigation } = this.props

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
                        <PinDots dotIndex={this.state.pinNumber.length} />
                    </View>
                    <View style={styles.panelArea}>
                    {
                        PanelLabels.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.panel, AppStyles.center]}
                                    onPress={() => this.onNumberClicked(item)}
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
        fontSize: FontSizes.topicFS,
        fontWeight: '600'
    },

    dotArea: {
        width: width * 0.6,
        height: 60
    },

    panelArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width * 0.58,
        marginTop: height * 0.02
    },

    panel: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: BorderRadii.buttonBR,
        backgroundColor: Colors.darkGreen,
        margin: width * 0.02
    }
})
