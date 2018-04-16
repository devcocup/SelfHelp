// React
import React, { Component } from 'react'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import AudioPlayer from 'react-native-play-audio'
import {
    Player,
    MediaStates
} from 'react-native-audio-toolkit'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { FontSizes, Colors, Paddings } = Constants


export default class ExerciseListenScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isPlaying: false,
            playButtonText: 'Play'
        }
    }

    componentDidMount() {
        // subscribe to the finished playing event
        SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
            console.log('finished playing', success);
        });
    }

    componentWillUnmount() {
        // this.player = null;
        // unsubscribe when unmount
        SoundPlayer.unmount();
        // AudioPlayer.onEnd(() => {
        //     console.log('on end');
        // })
    }

    controlSound() {
        const { isPlaying } = this.state

        // const url = 'http://d2gjx9ybupbr1n.cloudfront.net/Chimes.mp3'
        // const url = 'test.mp3'

        // this.player = new Player(url)

        // this.player.prepare((err) => {
        //     let seconds = this.player.duration / 1000; //duration is in milliseconds
        //     this.setState({
        //         totalTime: seconds
        //     })
        // })

        // this.player.play(() => {
        //     this.setState({
        //         isPlaying: true
        //     })
        // })

        // AudioPlayer.prepare(url, () => {
            // AudioPlayer.play()

            // AudioPlayer.getDuration((duration) => {
            //     console.log(duration)
            // })

            // setInterval(() => {
            //     AudioPlayer.getCurrentTime((currentTime) => {
            //         console.log(currentTime)
            //     })
            // }, 1000);
            // AudioPlayer.stop()
            // AudioPlayer.pause()
            // AudioPlayer.setCurrentTime(50.5)
        // })

        if (isPlaying) {
            try {
              SoundPlayer.playSoundFile('test', 'mp3');
            } catch (e) {
              console.log(`cannot play the sound file`, e);
            }
        }
    }

    onPlayButtonClicked = () => {
        // this.setState({
        //     isPlaying: !this.state.isPlaying
        // })
        // this.controlSound()
        try {
            SoundPlayer.playSoundFile('test', 'mp3');
        } catch (e) {
            console.log(`cannot play the sound file`, e);
        }
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
                    <View style={[styles.audioControl, AppStyles.center]}>
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

    playButtonText: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        fontWeight: 'bold'
    }
})
