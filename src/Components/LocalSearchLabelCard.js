// React
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height, width } = Dimensions.get('window')
const { Margins, Paddings, FontSizes, BorderRadii, Colors } = Constants


export default class LocalSearchLabelCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSelected: false
        }
    }

    onCategorySelected = (onCardSelect) => {
        this.setState({
            isSelected: !this.state.isSelected
        })
        onCardSelect()
    }

    render() {
        const { content, onCardSelect } = this.props
        const { isSelected } = this.state
        const itemBgStyle = {
            backgroundColor: isSelected ? Colors.orange: Colors.darkGreen
        }

        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.onCategorySelected(onCardSelect)}>
                    <View
                        style={[styles.categoryCard, AppStyles.center, itemBgStyle]}
                    >
                        <Text style={styles.cardText}>{content}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    categoryCard: {
        width: width / 4 - 20,
        height: height / 10,
        borderRadius: BorderRadii.boxBR,
        margin: 5
    },

    cardText: {
        color: 'white',
        textAlign: 'center',
        fontSize: FontSizes.listFS,
        fontWeight: '600'
    }
})
