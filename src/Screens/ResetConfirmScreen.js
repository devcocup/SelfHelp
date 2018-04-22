// React
import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import localStorage from 'react-native-sync-localstorage'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Button from '../Components/Button'

const { height, wdith } = Dimensions.get('window')
const { Paddings, Margins, Colors, FontSizes } = Constants


export default class ResetConfirmScreen extends Component {
    goToScreen = (ScreenName, navigation) => {
        const { navigate } = navigation
        navigate(ScreenName)
    }

    onReset = (navigation) => {
        localStorage.removeItem('PIN')
        this.goToScreen('CreateSecurityPinScreen', navigation)
    }

    onCancel = (navigation) => {
        this.goToScreen('AnswerSecurityQuestionScreen', navigation)
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={AppStyles.mainContainer}>
              <View style={styles.container}>
                <View style={[styles.warningMessageArea, AppStyles.hCenter]}>
                    <Text style={styles.headerTitle}>WARNING</Text>
                    <Text style={styles.headerContent}>Are you sure you want to earase your Safe Help Line app data and reset your pin?</Text>
                </View>
                <View style={[styles.descriptionArea, AppStyles.center]}>
                    <Text style={styles.descriptionText}>You will lose journal entries, user photos, and saved cooring pages.</Text>
                </View>
                <View style={[styles.buttonArea, AppStyles.hCenter]}>
                    <Button
                        label='Yes, reset my security pin.'
                        bgColor={Colors.red}
                        onPress={() => this.onReset(navigation)}
                    />
                    <Button
                        label='Cancel'
                        bgColor='white'
                        onPress={() => this.onCancel(navigation)}
                    />
                </View>
              </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: Margins.lM,
        paddingHorizontal: Paddings.containerP
    },

    warningMessageArea: {
        flex: .4,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    headerTitle: {
        color: 'white',
        fontSize: FontSizes.textHeaderFS,
        fontWeight: 'bold'
    },

    headerContent: {
        color: 'white',
        fontSize: FontSizes.textHeaderFS,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    descriptionArea: {
        flex: .2,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen
    },

    descriptionText: {
        color: 'white',
        fontSize: FontSizes.textContentFS
    },

    buttonArea: {
        flex: .4,
        paddingTop: Paddings.containerP
    }
})
