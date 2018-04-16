import React, { Component } from 'react'
import { View,ScrollView,Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import Communications from 'react-native-communications'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

//Assets
import Header from '../Components/Header'
import HeaderStrip from '../Components/HeaderStrip'
import HomeButton from '../Components/HomeButton'
import ChatMenu from './ChatMenu'
import CallMenu from './CallMenu'

const Search = require('../Assets/Images/ic_search_white_3x.png')
const Logo = require('../Assets/Images/logo.png')
const Phone = require('../Assets/Images/ic_call_white_3x.png')
const Menu = require('../Assets/Images/menu.png')
const Chat = require('../Assets/Images/ic_chat_white_3x.png')
const Learn = require('../Assets/Images/ic_school_white_3x.png')
const SelfCare = require('../Assets/Images/self_care.png')
const Exercises = require('../Assets/Images/exercises.png')

const { height,width } = Dimensions.get('window')


export default class MainScreen extends Component {
    static navigationOptions = {      
        headerStyle: {backgroundColor: 'rgb(0,143,120)'},
        headerTintColor: 'white',
        headerLeft: <Text style={{ fontSize: 18, color: 'white', fontWeight: '600',marginLeft: 10 }}> Safe Helpline </Text>,
        headerRight: <Image source={Menu} style={{ marginRight: 10 }}/>
    }

    state = {
        chatMenuVisible: false,
        callMenuVisible: false
    }

    dismissModal() {
        this.setState({
            chatMenuVisible: false,
            callMenuVisible: false
        })
    }

    goToScreen = (ScreenName) => {
        const { navigate } = this.props.navigation
        navigate(ScreenName)
    }

    onChatMenu = () => {
        this.setState({
            chatMenuVisible: true
        })
    }

    onChat = () => {
        const { navigate } = this.props.navigation
        this.dismissModal()
        navigate('ChatScreen', { chatType: 'OneOnOne' })
    }

    onGroupChat = () => {
        const { navigate } = this.props.navigation
        this.dismissModal()
        navigate('ChatScreen', { chatType: 'Group' })
    }

    onCancel = () => {
        this.dismissModal();
    }

    onCallMenu = () => {
        this.setState({
            callMenuVisible: true
        })
    }

    onInternet = () => {
        this.dismissModal()
        this.goToScreen('CallScreen')
    }

    onCellular = () => {
        this.dismissModal()
        // this.goToScreen('CallScreen')
        Communications.phonecall('18779955247', true)
    }

    render() {
        const {
            chatMenuVisible,
            callMenuVisible
        } = this.state
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Home'
                    navigation={navigation}
                />
                <HeaderStrip
                    index={1}
                />
                <ScrollView style={{ backgroundColor:'rgb(0,131,105)' }}>  
                    <View style={{ backgroundColor:'white', height:height/5, justifyContent:'center',alignItems:'center' }}>
                        <Image source={Logo} style={{ height:100, width:width }} />
                    </View>   
                    <View style={{margin:10}}>
                        <View style={[styles.Boxcontainer, AppStyles.hCenter]}>
                            <HomeButton 
                                source={Chat} 
                                Label='Chat'
                                onPress={this.onChatMenu} 
                            />
                            <HomeButton 
                                source={Phone} 
                                Label='Call'  
                                onPress={this.onCallMenu} 
                            />         
                        </View>    
                        <View style={[styles.Boxcontainer, AppStyles.hCenter]}>
                            <HomeButton 
                                source={Learn} 
                                Label='Learn'
                                onPress={() => this.goToScreen('LearnScreen')} 
                            />
                            <HomeButton 
                                source={SelfCare}
                                Label='Self-Care'
                                onPress={() => this.goToScreen('SelfCareScreen')} 
                            />    
                        </View>  
                        <View style={[styles.Boxcontainer, AppStyles.hCenter]}>
                            <HomeButton
                                source={Exercises}
                                Label='Exercises' 
                                onPress={() => this.goToScreen('ExercisesScreen')}  
                            />
                            <HomeButton
                                source={Search}
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
                <Overlay visible={callMenuVisible}
                    closeOnTouchOutside animationType="zoomIn"
                    containerStyle={{ backgroundColor: 'rgba(0,131,105,0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: 'transparent' }}
                    animationDuration={500}
                >
                    <CallMenu
                        onInternet={this.onInternet}
                        onCellular={this.onCellular}
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
