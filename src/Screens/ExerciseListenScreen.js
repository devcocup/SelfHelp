// React
import React, { Component } from 'react'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Dimensions, NativeModules } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { FontSizes, Colors, Paddings } = Constants
const { RNSoundPlayer } = NativeModules


export default class ExerciseListenScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isPlaying: false,
            playButtonText: 'Play'
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    controlSound() {
        const { isPlaying } = this.state

        if (isPlaying) {
            this.setState({
                playButtonText: 'Pause'
            })

            try {
                RNSoundPlayer.playSoundFile('test', 'mp3')
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
        } else {
            this.setState({
                playButtonText: 'Play'
            })

            try {
                RNSoundPlayer.pause()
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
        }
    }

    onPlayButtonClicked = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
        this.controlSound()
    }


    render() {
        const { onPlayButtonClicked } = this
        const { navigation } = this.props
        const { playButtonText } = this.state
        const { params } = navigation.state
        const { bgImage } = params

        return (
            <ImageBackground
                style={AppStyles.mainContainer}
                source={bgImage}
            >
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <View style={[{flex: 1}, AppStyles.vEnd]}>
                    <View style={[styles.audioControl, AppStyles.hCenter]}>
                        <TouchableOpacity onPress={onPlayButtonClicked}>
                            <View style={[AppStyles.center, styles.buttonArea]}>
                                <Text style={styles.playButtonText}>{playButtonText}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    audioControl: {
        height: height / 8,
        width,
        backgroundColor: Colors.gray
    },

    textStyle: {
        color: 'white',
        fontSize: FontSizes.topicFS
    },

    buttonArea: {
        paddingTop: Paddings.elementP
    },

    playButtonText: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: 'bold'
    }
})
