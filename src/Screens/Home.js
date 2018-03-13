//React
import React, { Component } from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

//Assets
import CallScreen from './CallScreen'
import ChatScreen from './ChatScreen'
import MainScreen from './MainScreen'
import SearchScreen from './SearchScreen'
import LearnScreen from './LearnScreen'

const Menu = require('../Assets/Images/menu.png')

const initialLayout = {

    height: 0,
    width: Dimensions.get('window').width,
};

const FirstRoute = () => <MainScreen />
const SecondRoute = () => <CallScreen />
const ThirdRoute = () => <ChatScreen />
const FourthRoute = () => <SearchScreen />
const FifthRoute = () => <LearnScreen />

export default class Home extends Component {

    static navigationOptions = {

        headerStyle: { backgroundColor: 'rgb(0,143,120)' },
        headerTintColor: 'white',
        headerLeft: <Text style={{ fontsize: 17, color: 'white', fontWeight: '600', marginLeft: 10 }}> Safe Helpline </Text>,
        headerRight: <Image source={Menu} style={{ marginRight: 10 }} />
    }

    state = {
        index: 0,
        routes: [
            { key: 'first' },
            { key: 'second' },
            { key: 'third' },
            { key: 'fourth' },
            { key: 'fifth' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} style={styles.TabBar} indicatorStyle={styles.IndicatorStyle} />;

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
        fifth: FifthRoute
    });

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}

            />
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    TabBar: {
        height: 5,
        backgroundColor: '#E9EED7'
    },

    IndicatorStyle: {
        height: 5,
        backgroundColor: '#faa74a'
    },
})
