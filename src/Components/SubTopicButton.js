// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, BorderRadii, Colors } = Constants


export default class SubTopicButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isDisplayed: false
        }
    }

    onItemClicked = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    render() {
        const { content } = this.props
        const { isDisplayed } = this.state
        const itemBgStyle = {
            backgroundColor: isDisplayed ? Colors.darkGreen : Colors.lightGreen
        }

        return (
            <View style={AppStyles.center}>
                <TouchableOpacity onPress={() => this.onItemClicked()}>
                    <View style={[styles.boxContainer, AppStyles.center, itemBgStyle]}>
                        <Text style={styles.textStyle}>
                            {content.categoryTitle}
                        </Text>
                    </View>
                </TouchableOpacity>
                {
                    isDisplayed &&
                    <View style={styles.subContentBox}>
                    {
                        content.categoryContent.map((subItem, subIndex) => {
                            return (
                                <Text
                                    key={subIndex}
                                    style={styles.subTextStyle}
                                >
                                    {subItem}
                                </Text>
                            )
                        })
                    }
                    </View>
                }
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        width: width - 40,
        borderRadius: BorderRadii.boxBR,
        padding: Paddings.elementP,
        marginTop: 10
    },

    textStyle: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        textAlign: 'center',
        fontWeight: '600'
    },

    subContentBox: {
        flexDirection: 'row',
        width: width - 40,
        backgroundColor: 'white',
        borderRadius: BorderRadii.boxBR,
        padding: Paddings.elementP,
        marginTop: Margins.elementMT
    },

    subTextStyle: {
        color: 'black',
        fontSize: FontSizes.hintFS
    }
})
