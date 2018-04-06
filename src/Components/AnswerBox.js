// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, BorderRadii, Colors } = Constants


export default class AnswerBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isDisplayed: false
        }
    }

    onAnswerItemClicked = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    render() {
        const { content } = this.props
        const { isDisplayed } = this.state

        return (
            <View>
                <TouchableOpacity onPress={() => this.onAnswerItemClicked()}>
                    <View style={styles.boxContainer}>
                        <View style={[styles.captionArea, AppStyles.center]}>
                            <Text style={styles.captionText}>
                                {content.choiceCaption}
                            </Text>
                        </View>
                        <View style={styles.contentArea}>
                            <Text style={styles.textStyle}>
                                {content.content}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {
                    isDisplayed &&
                    <View style={styles.subContentBox}>
                        <Text style={styles.subTextStyle}>{content.subContent}</Text>
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
        backgroundColor: Colors.darkGreen,
        borderRadius: BorderRadii.boxBR,
        padding: Paddings.elementP,
        marginTop: 10
    },

    captionArea: {
        flex: .15
    },

    captionText: {
        color: 'white',
        fontSize: FontSizes.quizCaptionFS,
        fontWeight: '900'
    },

    contentArea: {
        flex: .85
    },

    textStyle: {
        color: 'white',
        fontSize: FontSizes.quizAnswerFS
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
        fontSize: FontSizes.quizAnswerFS
    }
})
