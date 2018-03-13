import React, { Component } from 'react'
import {

    View,
    ScrollView,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet

} from 'react-native'

import HomeButton from '../Components/HomeButton'

const Search = require('../Assets/Images/ic_search_white_3x.png')
const Logo = require('../Assets/Images/logo.png')
const Phone = require('../Assets/Images/ic_call_white_3x.png')
const Menu = require('../Assets/Images/menu.png')
const Chat = require('../Assets/Images/ic_chat_white_3x.png')
const Learn = require('../Assets/Images/ic_school_white_3x.png')

const { height, width } = Dimensions.get('window')

export default class MainScreen extends Component {

    static navigationOptions = {
        headerStyle: { backgroundColor: 'rgb(0,143,120)' },
        headerTintColor: 'white',
        headerLeft: <Text style={{ fontSize: 17, color: 'white', fontFamily:'ArialBoldMT', marginLeft: 10,  }}> Safe Helpline </Text>,
        headerRight: <Image source={Menu} style={{ marginRight: 10 }} />
    }

    render() {

        goToScreen = (ScreenName) => {
            const { navigate } = this.props.navigation;
            navigate(ScreenName);
        }
        
        return (
            <ScrollView style={{ backgroundColor: 'rgb(0,131,105)' }}>
                <View style={{ backgroundColor: 'white', height: height / 4.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Logo} style={{ height: 100, width: width }} />
                </View>

                <View style={{ margin: 35 }}>
                    <View style={styles.BoxContainer}>
                        <HomeButton
                            source={Chat}
                            Label='Chat'
                        />

                        <HomeButton
                            source={Phone}
                            Label='Call'
                        />

                    </View>
                    <View style={styles.BoxContainer}>

                        <HomeButton
                            source={Learn}
                            Label='Learn'
                            onPress={() => this.goToScreen("LearnScreen")} 
                        />

                        <HomeButton
                            Label='Plan'
                        />
                    </View>

                    <View style={styles.BoxContainer}>
                        <HomeButton
                            Label='Exercises'
                        />

                        <HomeButton
                            Label='Search'
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({

    BoxContainer: {

        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,
    },
})
