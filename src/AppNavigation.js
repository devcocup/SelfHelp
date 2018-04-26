//React
import React from 'react'

//Navigation
import { StackNavigator } from 'react-navigation'

//Screens
import Home from './Screens/Home'
import ComingSoonScreen from './Screens/ComingSoon'
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
import ExerciseDetailScreen from './Screens/ExerciseDetailScreen'
import ExerciseListenScreen from './Screens/ExerciseListenScreen'
import SoothingSoundsScreen from './Screens/SoothingSoundsScreen'
import JournalScreen from './Screens/JournalScreen'
import CurrentJournalPromptScreen from './Screens/CurrentJournalPromptScreen'
import PastJournalsScreen from './Screens/PastJournalsScreen'
import LocalResourcesScreen from './Screens/LocalResourcesScreen'
import TransitionResourcesScreen from './Screens/TransitionResourcesScreen'
import SearchResultScreen from './Screens/SearchResultScreen'
import CreateSecurityPinScreen from './Screens/CreateSecurityPinScreen'
import ConfirmSecurityPinScreen from './Screens/ConfirmSecurityPinScreen'
import CreateSecurityQuestionScreen from './Screens/CreateSecurityQuestionScreen'
import ReviewInfoScreen from './Screens/ReviewInfoScreen'
import SecurityPinFinishScreen from './Screens/SecurityPinFinishScreen'
import EnterSecurityPinScreen from './Screens/EnterSecurityPinScreen'
import AnswerSecurityQuestionScreen from './Screens/AnswerSecurityQuestionScreen'
import ResetConfirmScreen from './Screens/ResetConfirmScreen'
import ColoringBookScreen from './Screens/ColoringBookScreen'
import ColoringScreen from './Screens/ColoringScreen'
import SelectPageToColorScreen from './Screens/SelectPageToColorScreen'
import SelfCareQuizScreen from './Screens/SelfCareQuizScreen'
import SelfCareQuizResultsScreen from './Screens/SelfCareQuizResultsScreen'
import TalkToSomeoneScreen from './Screens/TalkToSomeoneScreen'
import ThingsThatMakeMeSmileScreen from './Screens/ThingsThatMakeMeSmileScreen'
import ImageViewScreen from './Screens/ImageViewScreen'
import SelfCareSuggestionScreen from './Screens/SelfCareSuggestionScreen'


export const AppNavigation = StackNavigator({
    Home: { screen: Home },
    ComingSoonScreen: { screen: ComingSoonScreen },
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
    ExerciseDetailScreen: { screen: ExerciseDetailScreen },
    ExerciseListenScreen: { screen: ExerciseListenScreen },
    SoothingSoundsScreen: { screen: SoothingSoundsScreen },
    JournalScreen: { screen: JournalScreen },
    CurrentJournalPromptScreen: { screen: CurrentJournalPromptScreen },
    PastJournalsScreen: { screen: PastJournalsScreen },
    LocalResourcesScreen: { screen: LocalResourcesScreen },
    TransitionResourcesScreen: { screen: TransitionResourcesScreen },
    SearchResultScreen: { screen: SearchResultScreen },
    CreateSecurityPinScreen: { screen: CreateSecurityPinScreen },
    ConfirmSecurityPinScreen: { screen: ConfirmSecurityPinScreen },
    CreateSecurityQuestionScreen: { screen: CreateSecurityQuestionScreen },
    ReviewInfoScreen: { screen: ReviewInfoScreen },
    SecurityPinFinishScreen: { screen: SecurityPinFinishScreen },
    EnterSecurityPinScreen: { screen: EnterSecurityPinScreen },
    AnswerSecurityQuestionScreen: { screen: AnswerSecurityQuestionScreen },
    ResetConfirmScreen: { screen: ResetConfirmScreen },
    ColoringBookScreen: { screen: ColoringBookScreen },
    ColoringScreen: { screen: ColoringScreen },
    SelectPageToColorScreen: { screen: SelectPageToColorScreen },
    SelfCareQuizScreen: { screen: SelfCareQuizScreen },
    SelfCareQuizResultsScreen: { screen: SelfCareQuizResultsScreen },
    TalkToSomeoneScreen: { screen: TalkToSomeoneScreen },
    ThingsThatMakeMeSmileScreen: { screen: ThingsThatMakeMeSmileScreen },
    ImageViewScreen: { screen: ImageViewScreen },
    SelfCareSuggestionScreen: { screen: SelfCareSuggestionScreen }
},
{
    headerMode: 'none',
    initialRouteName: 'MainScreen'
})
