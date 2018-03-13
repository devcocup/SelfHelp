//React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class CallScreen extends Component {

    static navigationOptions = {

        title: 'Call Screen',
        headerStyle: { backgroundColor: 'rgb(0,143,120)' },
        headerTintColor: 'white',
        headerTitleStyle: { alignSelf: 'flex-start' }

    }

    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1}}>
                <Text style={{ fontSize: 30, color: 'white' }}> Call Screen </Text>
            </View>
        )
    }
}
