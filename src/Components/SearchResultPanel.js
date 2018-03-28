// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const UpIcon = require('../Assets/Images/down_arrow.png')
const DownIcon = require('../Assets/Images/down_arrow.png')
const { Paddings, Margins, Colors } = Constants


export default class SearchResultPanel extends Component {
    constructor(props) {
        super(props)

        this.icons = {
            'up': UpIcon,
            'down': DownIcon
        }

        this.state = {
            title: props.title,
            expanded: true,
            animation: new Animated.Value()
        }
    }

    toggle() {
        const initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
              finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight

        this.setState({
            expanded: !this.state.expanded
        })

        this.state.animation.setValue(initialValue)
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start()
    }

    setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        })
    }

    setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        })
    }

    render() {
        const { icons } = this
        const { expanded, animation } = this.state

        let icon = this.icons['down']

        if (expanded) {
            icon = icons['up']
        }

        const activeTitleStyle = {
            backgroundColor: expanded ? Colors.orange : Colors.primaryBgColor
        }

        return (
            <Animated.View
                style={[styles.container, {height: animation}]}
            >
                <View
                    style={[styles.titleContainer, AppStyles.vCenter, activeTitleStyle]}
                    onLayout={this.setMinHeight.bind(this)}
                >
                    <TouchableOpacity
                        style={[styles.button, AppStyles.center]} 
                        onPress={this.toggle.bind(this)}
                    >
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.state.title}</Text>
                </View>                
                <View
                    style={styles.body}
                    onLayout={this.setMaxHeight.bind(this)}
                >
                    {this.props.children}
                </View>
            </Animated.View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: Paddings.elementP
    },

    title: {
        flex: .9,
        padding: 10,
        marginBottom: Margins.elementMB,
        color: 'white',
        fontWeight: 'bold'
    },

    button: {
        flex: .1,
        marginBottom: Margins.elementMB,
    },

    buttonImage: {
        width: 30,
        height: 25
    },

    body: {
        paddingTop : 0
    }
})
