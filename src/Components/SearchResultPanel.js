// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const UpIcon = require('../Assets/Images/down_arrow.png')
const DownIcon = require('../Assets/Images/down_arrow.png')


export default class SearchResultPanel extends Component {
    constructor(props) {
        super(props)

        this.icons = {
            'up': UpIcon,
            'down': DownIcon
        }

        this.state = {
            title: props.title,
            expanded: true
        }
    }

    toggle() {

    }

    render() {
        const { icons } = this
        const { expanded } = this.state

        let icon = this.icons['down']

        if (expanded) {
            icon = icons['up']
        }

        return (
             <View style={styles.container} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor='#f1f1f1'
                    >
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        />
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body}>
                    {this.props.children}
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        overflow: 'hidden'
    },

    titleContainer: {
        flexDirection: 'row'
    },

    title: {
        flex: 1,
        padding: 10,
        color: '#2a2f43',
        fontWeight: 'bold'
    },

    button: {

    },

    buttonImage: {
        width: 30,
        height: 25
    },

    body: {
        padding : 10,
        paddingTop : 0
    }
})
