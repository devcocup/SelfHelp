//React
import React from 'react'

//Navigation
import { StackNavigator } from 'react-navigation'

//Screens
import Home from './Screens/Home'
import MainScreen from './Screens/MainScreen'
import CallScreen from './Screens/CallScreen'
import LearnScreen from './Screens/LearnScreen'
import PlanScreen from './Screens/PlanScreen'
import SearchScreen from './Screens/SearchScreen'
import ExercisesScreen from './Screens/ExercisesScreen'
import ChatScreen from './Screens/ChatScreen'


export const AppNavigation =  StackNavigator({
    Home: { screen: Home },
    MainScreen: { screen: MainScreen },
    CallScreen: { screen: CallScreen },
    LearnScreen: { screen: LearnScreen },
    PlanScreen: { screen: PlanScreen },
    SearchScreen: { screen: SearchScreen },
    ExercisesScreen: { screen: ExercisesScreen },
    ChatScreen: { screen: ChatScreen },
},
{
  initialRouteName: 'MainScreen',
})
