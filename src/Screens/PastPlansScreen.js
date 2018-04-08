// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'

const { height, width } = Dimensions.get('window')
const { PastPlansLabels, Margins, Paddings, Colors, FontSizes } = Constants

const PlanCard = ({ itemContent }) => {
    return (
        <TouchableOpacity>
            <View style={[styles.plancard, AppStyles.hCenter]}>
                <Text style={styles.dateStyle}>{itemContent.date}</Text>
                <Text style={styles.barStyle}>|</Text>
                <Text style={styles.timeStyle}>{itemContent.time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class PastPlansScreen extends Component {
    render() {
        const { navigation } = this.props

        return(
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                {
                    PastPlansLabels.map((item, index) => {
                        return (
                            <PlanCard
                                key={index}
                                itemContent={item}
                            />
                        )
                    })
                }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    plancard: {
        width,
        height: 60,
        flexDirection: 'row',
        backgroundColor: Colors.orange,
        marginBottom: 1,
        paddingLeft: Paddings.containerP
    },

    dateStyle: {
        color: 'white',
        fontSize: FontSizes.listFS,
        fontWeight: 'bold'
    },

    barStyle: {
        color: 'white',
        marginHorizontal: Margins.elementM
    },

    timeStyle: {
        color: 'white',
        fontSize: FontSizes.listFS
    }
})
