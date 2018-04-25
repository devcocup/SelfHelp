import React, { Component } from 'react'
import { View, ScrollView, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Overlay from 'react-native-modal-overlay'
import ImagePicker from 'react-native-image-picker'

// Gloabal Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import Button from '../Components/Button'

const { height, width } = Dimensions.get('window')
const { ThingsThatMakeMeSmileImages, Margins, Paddings, Colors, FontSizes } = Constants


export default class ThingsThatMakeMeSmileScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modalVisible: false,
            imageItems: ThingsThatMakeMeSmileImages
        }
    }

    dismissModal() {
        this.setState({
            modalVisible: false
        })
    }

    onImageItemClicked = (imageSource, index) => {
        const { navigation } = this.props
        const { navigate } = navigation
        navigate('ImageViewScreen', { imageSource, index })
    }

    onDeleteClicked = (index) => {
        const removedItems = this.state.imageItems.splice(index, 1)
        this.setState({
            imageItems: this.state.imageItems
        })
        this.dismissModal()
    }

    onCancelClicked = () => {
        this.dismissModal()
    }

    componentDidMount() {
        const { navigation } = this.props
        const { params } = navigation.state
        const deleteAction = params  !== undefined ? (params.deleteAction !== undefined ? params.deleteAction : false) : false
        this.setState({
            modalVisible: deleteAction
        })   
    }

    selectPhoto = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('canceled')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.uri }
                let tempImages = this.state.imageItems
                tempImages.push(source)
                this.setState({
                    imageItems: tempImages
                })
            }
        })
    }

    render() {
        const { onImageItemClicked, onDeleteClicked, onCancelClicked, selectPhoto } = this 
        const { navigation } = this.props
        const { imageItems, modalVisible } = this.state
        const { params } = navigation.state
        const deleteAction = params  !== undefined ? (params.deleteAction !== undefined ? params.deleteAction : false) : false
        const index = params !== undefined ? (params.index !== undefined ? params.index : false) : 0
        const imageSource = params !== undefined ? (params.imageSource !== undefined ? params.imageSource : null) : null
        
        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView style={styles.container}>
                    <View style={styles.imageContainer}>
                    {
                        imageItems.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => onImageItemClicked(item, index)}
                                >
                                    <Image
                                        source={item}
                                        style={styles.imageItem}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                    {
                        <TouchableOpacity
                            onPress={selectPhoto}
                        >
                            <View style={[styles.imageItem, AppStyles.center]}>
                                <Text style={styles.plusSign}>+</Text>                                
                            </View>
                        </TouchableOpacity>
                    }
                    </View>
                </ScrollView>
                <Overlay visible={modalVisible}
                    closeOnTouchOutside animationType='zoomIn'
                    containerStyle={{ backgroundColor: 'rgba(0,131,105,0.78)' }}
                    childrenWrapperStyle={{ backgroundColor: 'transparent' }}
                    animationDuration={500}
                >
                    <View style={AppStyles.center}>
                        <Image
                            source={imageSource}
                            style={styles.selectedImage}
                        />
                        <Button
                            label='Delete Photo'
                            bgColor={Colors.red}
                            onPress={() => onDeleteClicked(index)}
                        />
                        <Button
                            label='Cancel'
                            bgColor='white'
                            onPress={onCancelClicked}
                        />
                    </View>
                </Overlay>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray
    },

    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    imageItem: {
        width: width / 3,
        height: width / 3,
        backgroundColor: Colors.primaryBgColor
    },

    plusSign: {
        color: 'white',
        fontSize: FontSizes.headingFS,
        fontWeight: '600'
    },

    selectedImage: {
        width: width * 2 / 5,
        height: width * 2 / 5,
        marginBottom: Margins.lM
    }
})
