//React
import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class PlanScreen extends Component {

    static navigationOptions = {

        title: 'Plan Screen',
        headerStyle: { backgroundColor: 'rgb(0,143,120)' },
        headerTintColor: 'white',
        headerTitleStyle: { alignSelf: 'flex-start' }

    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}> Plan Screen </Text>
            </View>
        )
    }
}
