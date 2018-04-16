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

const { height, width } = Dimensions.get('window')
const { Paddings, Margins, Colors, FontSizes, BorderRadii } = Constants


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
                <View style={[styles.container, AppStyles.hCenter]}>
                    <View style={[styles.numberField, AppStyles.vCenter]}>
                        <PhoneInput
                            ref={(ref) => { this.phone = ref }}
                        />
                    </View>
                    <TouchableOpacity onPress={this.callPhone}>
                        <View style={[styles.callButton, AppStyles.center]}>
                            <Text style={styles.callButtonText}>Call</Text>
                        </View>
                    </TouchableOpacity>
                </View>
           </View>    

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: Paddings.lP
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
