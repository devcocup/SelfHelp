import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import Communications from 'react-native-communications'
import SQLite from 'react-native-sqlite-2'
import { AndroidBackHandler } from 'react-navigation-backhandler';

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeaderStrip from '../Components/HeaderStrip'
import HomeButton from '../Components/HomeButton'
import ChatMenu from './ChatMenu'
import CallMenu from './CallMenu'

const Search = require('../Assets/Images/search.png')
const Logo = require('../Assets/Images/logo.png')
const Phone = require('../Assets/Images/phone.png')
const Menu = require('../Assets/Images/menu.png')
const Chat = require('../Assets/Images/chat.png')
const Learn = require('../Assets/Images/learn.png')
const SelfCare = require('../Assets/Images/self_care.png')
const Exercises = require('../Assets/Images/exercises.png')

const { height, width } = Dimensions.get('window')


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

  onBackButtonPressAndroid = () => {
      // console.log('this got called')
    if (this.state.callMenuVisible) {
      this.setState((prevState) => ({...prevState, callMenuVisible: !prevState.callMenuVisible}))
      return true;
    } else {
      return false;
    }
  };

    dismissModal() {
        this.setState({
            chatMenuVisible: false,
            callMenuVisible: false
        })
    }

  goToScreen = (ScreenName, content=null) => {
    const { navigate } = this.props.navigation
    if (content == null) {
      navigate(ScreenName)
    } else {
      navigate(ScreenName, { content })
    }
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

    onSafeCare = () => {
        const db = SQLite.openDatabase({name: 'securityDB', createFromLocation: '/data/securityDB.sqlite'})
        db.transaction((txn) => {
            txn.executeSql('CREATE TABLE IF NOT EXISTS Security(id INTEGER PRIMARY KEY NOT NULL, pin_number VARCHAR(6), security_question VARCHAR(100), security_answer VARCHAR(200))')
            txn.executeSql('SELECT * FROM `security`', [], (tx, res) => {
                let tempSecurity = []
                for (let i = 0; i < res.rows.length; ++i) {
                    tempSecurity.push(res.rows.item(i))
                }
                if (tempSecurity.length > 0) {
                    this.goToScreen('EnterSecurityPinScreen', tempSecurity[0])
                } else {
                    this.goToScreen('CreateSecurityPinScreen', tempSecurity[0])
                }
            })
        }) 
    }

    render() {
        const {
            chatMenuVisible,
            callMenuVisible
        } = this.state
        const { navigation } = this.props

        return(

            <View style={AppStyles.mainContainer}>
              <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
                <Header
                    type='Home'
                    isMain
                    navigation={navigation}
                />
                <HeaderStrip
                    index={1}
                />
                <ScrollView style={{ backgroundColor:'rgb(0,131,105)' }}>  
                    <View style={{ backgroundColor:'white', height:height/5, justifyContent:'center',alignItems:'center' }}>
                        <Image source={Logo} style={{ height:height/7, width:width }} resizeMode="contain"/>
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
                                onPress={this.onSafeCare} 
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
              </AndroidBackHandler>
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
