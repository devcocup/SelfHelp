import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, Dimensions, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

export default class HomeButton extends Component {
    constructor(props) {
      super(props);
      this.state = { pressStatus: false };
    }
    _onHideUnderlay(){
      this.setState({ pressStatus: false });
    }
    _onShowUnderlay(){
      this.setState({ pressStatus: true });
    }

    render(){
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                activeOpacity={0.4}
                style={ this.state.pressStatus ? styles.buttonStylePress: styles.buttonStyleDefault }
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                underlayColor='rgb(0,143,120)'
            >
                <View style={styles.container}>
                    <Image source={this.props.source} style={{ height: width * 0.13, width: width * 0.13 }} />
                    <Text style={ styles.textStyle}> {this.props.Label} </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

var styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyleDefault: {
        marginVertical: 4,
        marginHorizontal: 4,
        backgroundColor: 'rgb(0,143,120)',
        height: width * .35,
        width: width * 0.425,

        borderRadius: 7,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowOffset:{  width: 5,  height: 5,},
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },

    buttonStylePress: {
      marginVertical: 2,
      marginHorizontal: 2,
        backgroundColor: 'rgb(0,143,120)',
      height: width * .35,
      width: width * 0.45,
        borderRadius: 7,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    textStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Arial-BoldMT',
        fontWeight: 'bold'
    }
})
