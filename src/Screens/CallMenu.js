//React
import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

//Assets
import ModalMenuButton from '../Components/ModalMenuButton'

const { height,width } = Dimensions.get('window')

const CallMenu = ({ onInternet, onCellular, onCancel }) => {
    return (
        <View style={styles.mainContainer}>
            <ModalMenuButton
                label="Internet ( data )"
                bgColor="#F7A553"
                onPress={onInternet}
            />
            <ModalMenuButton
                label="Cellular ( minutes )"
                bgColor="#F7A553"
                onPress={onCellular}
            />
            <ModalMenuButton
                label="Cancel"
                bgColor="white"
                onPress={onCancel}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: 'rgb(0,131,105)',
        opacity: .8
    }
})

export default CallMenu
