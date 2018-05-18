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
import SearchResultSubList from "../Components/SearchResultSubList";
import VetCentersContainer from "../Components/VetCentersContainer";

const CallIcon = require('../Assets/Images/call_button.png')

const {height, width} = Dimensions.get('window')
const {
    SearchResultLabels,
    Paddings,
    Colors,
    FontSizes
} = Constants

const TypeIdToName = {
    1: "SARC",
    2: "Chaplain",
    3: "Legal",
    4: "Medical",
    5: "Civilian",
    6: "Military Police"
}


const TypeOrder = [
    "SARC",
    "Civilian",
    "Vet Centers",
    "Chaplain",
    "Legal",
    "Medical",
    "Military Police (Not Confidential)"
]


export default class SearchResultScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [],
            fetched: false
        }
    }


    componentWillMount() {
        const {navigation} = this.props
        const {params} = navigation.state
        const {locationSearchText, servicesQuery} = params

        console.log('Location Search Text: ', locationSearchText)
        console.log('Services Query: ', servicesQuery)


        this.getLocalResources(locationSearchText, servicesQuery)
    }

    getLocalResources = (locationSearchText, servicesQuery) => {
        const jsonPath = 'https://safehelpline.org/cfc/Ajax.cfc?method=search2&query=' + locationSearchText + '&services=' + servicesQuery
        fetch(jsonPath)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    services: responseJson,
                    fetched: true
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.label}</Text>
            </View>
        )
    }

    renderContent = (section) => {
        return (
            <View style={styles.content}>
                {
                    section.subContent.map((item, index) => {
                        return (
                            <View>
                                <Text>{item.subLabel}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    callPhone = (phoneNumber) => {
      console.log(phoneNumber)
        Communications.phonecall(phoneNumber, true)
    }

    render() {
        const {navigation} = this.props
        const {services, fetched} = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView
                  overScrollMode='always'
                  // style={{paddingVertical: 100}}

                >
                    {
                        !fetched &&
                        <View style={[styles.loading, AppStyles.center]}>
                            <ActivityIndicator size='large' color='white'/>
                        </View>
                    }
                    {
                        TypeOrder.map(category => {
                            switch(category){
                                case "Vet Centers":
                                    console.log(category)
                                    return(<VetCentersContainer/>)
                                default:
                                    return (<SearchResultSubList callPhone={this.callPhone} key={category} category={category} services={services.filter(service => TypeIdToName[service.TYPE] === category)} />)
                            }
                        })
                    }
                </ScrollView>
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
        fontSize: FontSizes.listFS,
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
