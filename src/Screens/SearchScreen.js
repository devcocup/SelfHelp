//React
import React, { Component } from 'react'
import { View,Text  } from 'react-native'

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Call Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'},
    }

    render() {
        return(
           <View style={{ backgroundColor: '#1F618D', flex:1 }}>
               <Text style={{ fontSize: 30, color: 'white' }}>Search Screen </Text>
           </View>    
        )
    }
}
