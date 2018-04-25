import React, { Component } from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { Colors } = Constants


export default class ImageViewScreen extends Component {
    deletePhoto = (imageIndex, imageSource, navigation) => {
        const { navigate } = navigation
        navigate('ThingsThatMakeMeSmileScreen', { index: imageIndex, imageSource: imageSource, deleteAction: true })
    }

    render() {
        const { deletePhoto } = this
        const { navigation } = this.props
        const { params } = navigation.state
        const { imageSource, index } = params

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    onDelete={() => deletePhoto(index, imageSource, navigation)}
                    navigation={navigation}
                />
                <View style={[styles.container, AppStyles.center]}>
                    <Image
                        source={imageSource}
                        style={styles.imageView}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray
    },

    imageView: {
        width,
        height: height * 2 / 5
    }
})
