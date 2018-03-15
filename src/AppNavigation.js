//React
import React from 'react'

//Navigation
import { StackNavigator } from 'react-navigation'

//Screens
import Home from './Screens/Home'
import MainScreen from './Screens/MainScreen'
import CallScreen from './Screens/CallScreen'
import LearnScreen from './Screens/LearnScreen'
import SelfCareScreen from './Screens/SelfCareScreen'
import SearchScreen from './Screens/SearchScreen'
import ExercisesScreen from './Screens/ExercisesScreen'
import ChatScreen from './Screens/ChatScreen'
import LearnDetailScreen from './Screens/LearnDetailScreen'

export const AppNavigation =  StackNavigator({
    Home: { screen: Home },
    MainScreen: { screen: MainScreen },
    CallScreen: { screen: CallScreen },
    LearnScreen: { screen: LearnScreen },
    SelfCareScreen: { screen: SelfCareScreen },
    SearchScreen: { screen: SearchScreen },
    ExercisesScreen: { screen: ExercisesScreen },
    ChatScreen: { screen: ChatScreen },
    LearnDetailScreen: { screen: LearnDetailScreen }
},
{
  headerMode: 'none',
  initialRouteName: 'MainScreen',
})
