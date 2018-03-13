//React
import React, { Component } from 'react'
import { View,Text  } from 'react-native'

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat Screen',
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerTitleStyle : {alignSelf:'flex-start'}
    }

    render() {
        return(
           <View style={{ backgroundColor:'#CB4335', flex:1 }}>
               <Text style={{ fontSize: 30, color: 'white' }}>Chat Screen </Text>
           </View>    
        )
    }
}
