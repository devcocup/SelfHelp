// React
import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

// Glbal Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import SecurityPinHeader from '../Components/SecurityPinHeader'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { SecurityQuestions, Margins, Paddings, FontSizes, Colors, BorderRadii } = Constants


export default class CreateSecurityQuestionScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            securityAnswer: ''
        }
    }

    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    onNextClicked = (navigation) => {
        console.log('next button clicked')
        this.goToScreen('ReviewInfoScreen', navigation)
    }

    render() {
        const { navigation } = this.props

        return (
            <KeyboardAvoidingView
                style={AppStyles.mainContainer}
                behavior='padding'
            >
                <SecurityPinHeader
                    headerType='FLOW'
                    flowIndex={3}
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>
                            Create a security question for password recovery
                        </Text>
                    </View>
                    <View style={styles.questionArea}>
                        <Text style={styles.title}>Question:</Text>
                        <View style={[styles.dropDown, AppStyles.vCenter]}>
                            <Dropdown
                                data={SecurityQuestions}
                                baseColor='white'
                                textColor={Colors.gray}
                            />
                        </View>
                    </View>
                    <View style={styles.answerArea}>
                        <Text style={styles.title}>Answer:</Text>
                        <View style={[styles.answerBox, AppStyles.vCenter]}>
                            <TextInput
                                style={styles.inputBox}
                                placeholder=''
                                underlineColorAndroid='rgba(0,0,0,0)'
                                onChangeText={(securityAnswer) => this.setState({ securityAnswer })}
                                value={this.state.securityAnswer}
                            />
                        </View>
                    </View>
                    <View style={[styles.buttonArea, AppStyles.hCenter]}>
                        <Button
                            label="Next"
                            bgColor="white"
                            onPress={() => this.onNextClicked(navigation)}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    titleArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.lP,
        paddingHorizontal: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    title: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: '600',
        textAlign: 'center'
    },

    questionArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    dropDown: {
        height: 40,
        backgroundColor: 'white',
        opacity: .95,
        borderRadius: BorderRadii.boxBR,
        paddingBottom: Paddings.elementP,
        marginTop: Margins.elementMT
    },

    answerArea: {
        marginHorizontal: Margins.containerM,
        paddingVertical: Paddings.containerP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    answerBox: {
        height: 40,
        backgroundColor: 'white',
        opacity: .95,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.elementMT
    },

    inputBox: {
        height: 40,
        width: width - 2 * Margins.containerM,
        borderRadius: BorderRadii.boxBR,
        backgroundColor: 'white',
        opacity: .95,
        textAlign: 'center'
    },

    buttonArea: {
        paddingTop: Paddings.containerP
    },


})
