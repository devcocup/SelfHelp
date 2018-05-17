// React
import React, {Component} from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions} from 'react-native'
import Communications from 'react-native-communications'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import SearchResultPanel from '../Components/SearchResultPanel'

const {
    SearchResultLabels,
    Paddings,
    Colors,
    FontSizes
} = Constants

const CallIcon = require('../Assets/Images/call_button.png')

const {height, width} = Dimensions.get('window')

export default class SearchResultSubList extends Component {
    renderHeader() {
        return (<View style={styles.header}>
            <Text style={styles.headerText}>{this.props.category}</Text>
        </View>)
    }

    renderSublist = () => {
      const {callPhone, services} = this.props;
        return (
            services.map((cardItem, cardIndex) => {
                return (<View key={cardIndex}>
                    <View key={cardIndex} style={styles.panelItem}>
                        <View style={styles.panelItemTextArea}>
                            <Text style={styles.subLabelText}>{cardItem.NAME}</Text>
                            <Text style={styles.phoneNumberText}>{cardItem.PHONE1}</Text>
                            <Text style={styles.locationText}>{cardItem.CITY}, {cardItem.STATE}</Text>
                        </View>
                        <View style={[styles.panelItemButton, AppStyles.center]}>
                            <TouchableOpacity
                                style={[styles.callButton, AppStyles.center]}
                                onPress={() => callPhone(cardItem.PHONE1)}>
                                <Image
                                    source={CallIcon}
                                    style={styles.callButtonImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>)
            })
        )
    }

    render() {
      console.log(this.props)
        return (
            <View>
                {
                    this.renderHeader()
                }
                {
                    this.renderSublist()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        width
    },

    loading: {
        height: height - 100
    },

    cardItem: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGreen,
        paddingVertical: Paddings.listPV,
        paddingHorizontal: Paddings.listPH
    },

    checkMarkArea: {
        flex: .15
    },

    checkMark: {
        width: 40,
        height: 40
    },

    textArea: {
        flex: .85
    },

    cardText: {
        color: 'white',
        fontSize: FontSizes.textHeaderFS,
        fontWeight: '600'
    },

    panelItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: Paddings.elementP,
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGray
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: FontSizes.listFS,
        fontWeight: '600',
        color: 'orange'
    },

    panelItemTextArea: {
        flex: .85
    },

    subLabelText: {
        color: 'black',
        fontSize: FontSizes.listFS,
        fontWeight: '600'
    },

    phoneNumberText: {
        color: 'black',
        fontSize: FontSizes.listFS
    },

    locationText: {
        color: 'black',
        fontSize: FontSizes.listFS
    },

    panelItemButton: {
        flex: .15
    },

    callButton: {
        backgroundColor: Colors.lightGray,
        width: 50,
        height: 50,
        borderRadius: 50
    },

    callButtonImage: {
        width: 40,
        height: 40
    }
})