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
import WhatCanIDoScreen from './Screens/WhatCanIDoScreen'
import QuizScenarioScreen from './Screens/QuizScenarioScreen'
import AtTheBeachScreen from './Screens/AtTheBeachScreen'
import ExerciseListenScreen from './Screens/ExerciseListenScreen'
import SoothingSoundsScreen from './Screens/SoothingSoundsScreen'
import JournalScreen from './Screens/JournalScreen'
import CurrentJournalPromptScreen from './Screens/CurrentJournalPromptScreen'
import PastJournalsScreen from './Screens/PastJournalsScreen'
import LocalResourcesScreen from './Screens/LocalResourcesScreen'
import SearchResultScreen from './Screens/SearchResultScreen'
import CreateSecurityPinScreen from './Screens/CreateSecurityPinScreen'
import ConfirmSecurityPinScreen from './Screens/ConfirmSecurityPinScreen'
import CreateSecurityQuestionScreen from './Screens/CreateSecurityQuestionScreen'
import ReviewInfoScreen from './Screens/ReviewInfoScreen'
import SecurityPinFinishScreen from './Screens/SecurityPinFinishScreen'
import EnterSecurityPinScreen from './Screens/EnterSecurityPinScreen'
import AnswerSecurityQuestionScreen from './Screens/AnswerSecurityQuestionScreen'


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
    ExercisesScreen: { screen: ExercisesScreen },
    WhatCanIDoScreen: { screen: WhatCanIDoScreen },
    QuizScenarioScreen: { screen: QuizScenarioScreen },
    AtTheBeachScreen: { screen: AtTheBeachScreen },
    ExerciseListenScreen: { screen: ExerciseListenScreen },
    SoothingSoundsScreen: { screen: SoothingSoundsScreen },
    JournalScreen: { screen: JournalScreen },
    CurrentJournalPromptScreen: { screen: CurrentJournalPromptScreen },
    PastJournalsScreen: { screen: PastJournalsScreen },
    LocalResourcesScreen: { screen: LocalResourcesScreen },
    SearchResultScreen: { screen: SearchResultScreen },
    CreateSecurityPinScreen: { screen: CreateSecurityPinScreen },
    ConfirmSecurityPinScreen: { screen: ConfirmSecurityPinScreen },
    CreateSecurityQuestionScreen: { screen: CreateSecurityQuestionScreen },
    ReviewInfoScreen: { screen: ReviewInfoScreen },
    SecurityPinFinishScreen: { screen: SecurityPinFinishScreen },
    EnterSecurityPinScreen: { screen: EnterSecurityPinScreen },
    AnswerSecurityQuestionScreen: { screen: AnswerSecurityQuestionScreen }
},
{
    headerMode: 'none',
    initialRouteName: 'MainScreen'
})
