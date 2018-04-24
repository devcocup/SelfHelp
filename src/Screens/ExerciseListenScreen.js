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
        RNSoundPlayer.stop()
    }

    onPlayButtonClicked = () => {
        const { isPlaying } = this.state
        const { navigation } = this.props
        const { params } = navigation.state
        const { content, gender } = params
        const { music } = content

        const musicFile = music ? (music + '_' + gender) : 'test'

        if (!isPlaying) {
            this.setState({
                playButtonText: 'Pause',
                isPlaying: true
            })

            try {
                RNSoundPlayer.playSoundFile(musicFile, 'mp3')
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
       } else {
            this.setState({
                playButtonText: 'Play',
                isPlaying: false
            })

            try {
                RNSoundPlayer.pause()
            } catch (e) {
                console.log(`cannot pause the sound file`, e);
            }
        }
    }


    render() {
        const { onPlayButtonClicked } = this
        const { navigation } = this.props
        const { playButtonText } = this.state
        const { params } = navigation.state
        const { content } = params
        const { bgImage } = content

        return (
            <ImageBackground
                style={[AppStyles.mainContainer, styles.container]}
                source={bgImage}
            >
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <View style={[{flex: 1}, AppStyles.vEnd]}>
                    <View style={[styles.audioControl, AppStyles.center]}>
                        <TouchableOpacity onPress={() => onPlayButtonClicked()}>
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
    container: {
        width,
        height
    },

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
    },

    playButtonText: {
        color: 'white',
        fontSize: FontSizes.menuFS,
        fontWeight: 'bold'
    }
})
