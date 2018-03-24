// React
import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import JournalHeadCard from '../Components/JournalHeadCard'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { Paddings, Margins, BorderRadii } = Constants


export default class CurrentJournalPromptScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            journalText: 'I am feeling good.'
        }
    }

    onDone = () => {
        console.log('done clicked')
    }

    render() {
        const { navigation } = this.props
        const { headerTitle, headerContent } = navigation.state.params

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={AppStyles.hCenter}>
                        <JournalHeadCard
                            topic={headerTitle}
                            content={headerContent}
                        />
                        <View style={[styles.answerArea, AppStyles.hCenter]}>
                            <View style={styles.textArea}>
                                <TextInput
                                    style={styles.inputBox}
                                    multiline={true}
                                    onChangeText={(journalText) => this.setState({ journalText })}
                                    value={this.state.journalText}
                                />
                            </View>
                            <View style={styles.buttonArea}>
                                <Button
                                    label='Done'
                                    bgColor='white'
                                    onPress={this.onDone}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    answerArea: {
        flex: 1,
        padding: Paddings.containerP
    },

    textArea: {
        flex: .8,
        width: width - 40,
        backgroundColor: 'white',
        borderRadius: BorderRadii.boxBR
    },

    inputBox: {
        height: height - 340,
        padding: Paddings.elementP
    },

    buttonArea: {
        flex: .2,
        width: width - 40,
        marginTop: Margins.containerM
    }
})
