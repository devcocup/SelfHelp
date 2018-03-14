import React, { Component } from 'react'
import { View,ScrollView,Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Overlay from 'react-native-modal-overlay'

//Assets
import HomeButton from '../Components/HomeButton'
import ChatMenu from './ChatMenu'

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

    state = {
        chatMenuVisible: false
    }

    goToScreen = (ScreenName) => {
        const { navigate } = this.props.navigation
        navigate(ScreenName)
    }

    onChatMenu = (ScreenName) => {
        // this.goToScreen(ScreenName)
        this.setState({
            chatMenuVisible: true
        })
    }

    onChat = () => {
        console.log('chat clicked')
        this.setState({
            chatMenuVisible: false
        })
        this.goToScreen('ChatScreen')
    }

    onGroupChat = () => {
        console.log('group chat clicked')
        this.setState({
            chatMenuVisible: false
        })
        this.goToScreen('ChatScreen')
    }

    onCancel = () => {
        this.setState({
            chatMenuVisible: false
        })
    }

    render() {
        const { chatMenuVisible } = this.state

        return(
            <View style={{ height: height }}>
                <ScrollView style={{ backgroundColor:'rgb(0,131,105)' }}>  
                    <View style={{ backgroundColor:'white', height:height/5, justifyContent:'center',alignItems:'center' }}>
                        <Image source={Logo} style={{ height:100, width:width }} />
                        </View>   
                        <View style={{margin:10}}>
                        <View style={styles.Boxcontainer}>
                            <HomeButton 
                                source={ Chat } 
                                Label='Chat'
                                onPress={() => this.onChatMenu("ChatScreen")} 
                            />
                            <HomeButton 
                                source={ Phone } 
                                Label='Call'  
                                onPress={() => this.goToScreen("CallScreen")} 
                            />         
                        </View>    
                        <View style={styles.Boxcontainer}>
                            <HomeButton 
                                source={ Learn } 
                                Label='Learn'
                                onPress={() => this.goToScreen("LearnScreen")} 
                            />
                            <HomeButton 
                                Label='Plan'  
                                onPress={() => this.goToScreen("PlanScreen")} 
                            />    
                        </View>  
                        <View style={styles.Boxcontainer}>
                            <HomeButton 
                                Label='Exercises' 
                                onPress={() => this.goToScreen("ExercisesScreen")}  
                            />
                            <HomeButton 
                                Label='Search' 
                                onPress={() => this.goToScreen("SearchScreen")}   
                            />   
                        </View>  
                    </View> 
                </ScrollView>
                <Overlay visible={chatMenuVisible}
                    closeOnTouchOutside animationType="zoomIn"
                    containerStyle={{ backgroundColor: 'rgba(0,131,105,0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: 'transparent' }}
                    animationDuration={500}
                >
                    <ChatMenu
                        onChat={this.onChat}
                        onGroupChat={this.onGroupChat}
                        onCancel={this.onCancel}
                    />
                </Overlay>
            </View>
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
