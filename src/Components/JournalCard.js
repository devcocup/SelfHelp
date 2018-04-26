// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, BorderRadii, Colors } = Constants


export default class Journalcard extends Component {
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
            backgroundColor: isDisplayed ? Colors.orange : Colors.secondaryOrange
        }

        return (
            <View style={AppStyles.center}>
                <TouchableOpacity onPress={() => this.onItemClicked()}>
                    <View style={[styles.boxContainer, AppStyles.center, itemBgStyle]}>
                        <Text style={styles.textStyle}>
                            {content.journal_date}
                        </Text>
                    </View>
                </TouchableOpacity>
                {
                    isDisplayed &&
                    <View style={styles.subContentBox}>
                        <Text
                            style={styles.questionStyle}
                        >
                            {content.journal_question}
                        </Text>
                        <Text
                            style={styles.answerStyle}
                        >
                            {content.journal_answer}
                        </Text>
                    </View>
                }
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        width,
        padding: Paddings.elementP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    textStyle: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        textAlign: 'center',
        fontWeight: '600'
    },

    subContentBox: {
        flexDirection: 'column',
        width,
        backgroundColor: 'white',
        padding: Paddings.elementP
    },

    questionStyle: {
        color: 'black',
        fontSize: FontSizes.listFS,
        fontWeight: '600',
        marginBottom: Margins.elementM
    },

    answerStyle: {
        color: 'black',
        fontSize: FontSizes.hintFS
    }
})
