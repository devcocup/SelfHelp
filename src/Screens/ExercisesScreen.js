//React
import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class CallScreen extends Component {

    static navigationOptions = {

        title: 'Exercises Screen',
        headerStyle: { backgroundColor: 'rgb(0,143,120)' },
        headerTintColor: 'white',
        headerTitleStyle: { alignSelf: 'flex-start' }

    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}> Exercises Screen </Text>
            </View>
        )
    }
}
