// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Linking, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, BorderRadii, Colors } = Constants


const RedirectButton = ({ content, onPress }) => {
    const itemBgStyle = {
        backgroundColor: Colors.darkGreen
    }

    return (
        <View style={AppStyles.center}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.boxContainer, AppStyles.center, itemBgStyle]}>
                    <Text style={styles.textStyle}>
                        {content.categoryTitle ? content.categoryTitle : content.text}
                    </Text>
                </View>
            </TouchableOpacity>
            {
                content.categoryContent && content.categoryContent.map((subItem, subIndex) => {
                    if(Array.isArray(subItem) && subItem.length === 3 ){
                        return (
                            <Text
                                key={subIndex}
                                style={styles.subTextStyle}
                            >
                                {subItem[0]}&nbsp;
                                <Text
                                    style={styles.subHyperText}
                                    onPress={() => Linking.openURL(subItem[2])}
                                >
                                    {subItem[1]}
                                </Text>
                            </Text>
                        )
                    }else{
                        return (
                            <Text
                                key={subIndex}
                                style={styles.subTextStyle}
                            >
                                {subItem}
                            </Text>
                        )
                    }
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        width: width - 40,
        borderRadius: BorderRadii.boxBR,
        padding: Paddings.elementP,
        marginTop: 10
    },

    textStyle: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        textAlign: 'center',
        fontWeight: '600'
    },

    subTextStyle: {
        color: 'white',
        fontSize: FontSizes.hintFS,
        padding: Paddings.elementP,
        marginTop: 10,
        marginBottom: 10
    },

    subHyperText: {
        fontWeight: 'bold',
        textDecorationColor: 'white',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'
    }
})

export default RedirectButton
