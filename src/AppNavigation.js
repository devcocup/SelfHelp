//React
import React from 'react'

//Navigation
import { StackNavigator } from 'react-navigation'

//Screens
import Home from './Screens/Home'
import MainScreen from './Screens/MainScreen'
import ChatScreen from './Screens/ChatScreen'
import CallScreen from './Screens/CallScreen'
import LearnScreen from './Screens/LearnScreen'
import SelfCareScreen from './Screens/SelfCareScreen'
import SearchScreen from './Screens/SearchScreen'
import ExercisesScreen from './Screens/ExercisesScreen'
import LearnDetailScreen from './Screens/LearnDetailScreen'
import PastPlansScreen from './Screens/PastPlansScreen'

export const AppNavigation =  StackNavigator({
    Home: { screen: Home },
    MainScreen: { screen: MainScreen },
    ChatScreen: { screen: ChatScreen },
    CallScreen: { screen: CallScreen },
    LearnScreen: { screen: LearnScreen },
    LearnDetailScreen: { screen: LearnDetailScreen },
    SelfCareScreen: { screen: SelfCareScreen },
    PastPlansScreen: { screen: PastPlansScreen },
    SearchScreen: { screen: SearchScreen },
    ExercisesScreen: { screen: ExercisesScreen }
},
{
    headerMode: 'none',
    initialRouteName: 'MainScreen',
})
