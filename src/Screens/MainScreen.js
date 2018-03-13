import React, { Component } from 'react'
import { View,ScrollView,Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
//Assets
import MenuBox from '../Components/MenuBox'

const Search = require('../Assets/Images/ic_search_white_3x.png')
const Logo = require('../Assets/Images/logo.png')
const Phone = require('../Assets/Images/ic_call_white_3x.png')
const Menu = require('../Assets/Images/menu.png')
const Chat = require('../Assets/Images/ic_chat_white_3x.png')
const Learn = require('../Assets/Images/ic_school_white_3x.png')

const { height,width } = Dimensions.get('window')

export default class MainScreen extends Component {
    static navigationOptions = {      
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerLeft: <Text style={{ fontSize: 18, color: 'white', fontWeight: '600',marginLeft: 10 }}> Safe Helpline </Text>,
        headerRight: <Image source={Menu} style={{ marginRight: 10 }}/>
    }

    goToScreen = (ScreenName) => {
        const { navigate } = this.props.navigation
        navigate(ScreenName)
    }

    render() {
        return(
            <ScrollView style={{backgroundColor: 'rgb(0,131,105)'}}>  
                <View style={{backgroundColor:'white', height: height/5, justifyContent:'center',alignItems:'center' }}>
                    <Image source={Logo} style={{ height:100, width:width }} />
                    </View>   
                    <View style={{margin:10}}>
                    <View style={styles.Boxcontainer}>
                        <MenuBox 
                            source={ Chat } 
                            Label='Chat'
                            onPress={() => this.goToScreen("ChatScreen")} 
                            
                        />
                        <MenuBox 
                            source={ Phone } 
                            Label='Call'  
                            onPress={() => this.goToScreen("CallScreen")} 
                        />         
                    </View>    
                    <View style={styles.Boxcontainer}>
                        <MenuBox 
                            source={ Learn } 
                            Label='Learn'
                            onPress={() => this.goToScreen("LearnScreen")} 
                        />
                        <MenuBox 
                            Label='Plan'  
                            onPress={() => this.goToScreen("PlanScreen")} 
                        />    
                    </View>  
                    <View style={styles.Boxcontainer}>
                        <MenuBox 
                            Label='Exercises' 
                            onPress={() => this.goToScreen("ExercisesScreen")}  
                        />
                        <MenuBox 
                            Label='Search' 
                            onPress={() => this.goToScreen("SearchScreen")}   
                        />   
                    </View>  
                </View> 
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    Boxcontainer: {
        flexDirection: 'row',
        justifyContent:'center',
        margin: 5
    }
})
