// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Communications from 'react-native-communications'
import Overlay from 'react-native-modal-overlay'
import Contacts from 'react-native-contacts'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
// import TopicButton from '../Components/TopicButton'
import Button from '../Components/Button'
import CallMenu from './CallMenu'
import ChatMenu from './ChatMenu'

const SearchIcon = require('../Assets/Images/search_orange.png')

const { height, width } = Dimensions.get('window')
const { Paddings, Margins, FontSizes, Colors, BorderRadii } = Constants

const PhoneCard = ({ name, phoneNumber, bgColor, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.phoneCard, AppStyles.hCenter, { backgroundColor: bgColor }]}
            onPress={onPress}
        >
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.separateBar}></View>
            <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
        </TouchableOpacity>
    )
}

const ChatCard = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.chatCard, AppStyles.hCenter]}
            onPress={onPress}
        >
            <Text style={styles.nameText}>{name}</Text>
        </TouchableOpacity>
    )
}

const callPhone = (phoneNumber) => {
    Communications.phonecall(phoneNumber, true)
}


export default class TalkToSomeoneScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            callMenuVisible: false,
            chatMenuVisible: false,
            contactMenuVisible: false,
            contacts: [],
            selectedContacts: []
        }
    }

    dismissModal() {
        this.setState({
            callMenuVisible: false,
            chatMenuVisible: false,
            contactMenuVisible: false
        })
    }

    onCallMenuClicked = () => {
        this.setState({
            callMenuVisible: true
        })
    }

    onInternet = () => {
        const { navigate } = this.props.navigation
        this.dismissModal()
        navigate('CallScreen')
    }

    onCellular = (phoneNumber) => {
        this.dismissModal()
        Communications.phonecall(phoneNumber, true)
    }

    onChat = () => {
        const { navigate } = this.props.navigation
        this.dismissModal()
        navigate('ChatScreen', { chatType: 'OneOnOne' })
    }

    onGroupChat = () => {
        const { navigate } = this.props.navigation
        this.dismissModal()
        navigate('ChatScreen', { chatType: 'Group' })
    }

    onCancel = () => {
        this.dismissModal()
    }

    onChatMenuClicked = () => {
        this.setState({
            chatMenuVisible: true
        })
    }

    selectFromContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err) throw err
            this.setState({
                contacts: contacts
            })
        })
        this.setState({
            contactMenuVisible: true
        })
    }

    onContactItemClicked = (firstname, lastname, number) => {
        const tempName = firstname + ' ' + lastname
        const tempSelected = this.state.selectedContacts
        const tempContact = {name: tempName, number: number}
        const found = tempSelected.some(function (el) {
            return el.name === tempContact.name
        })
        if (!found) {
            tempSelected.push({name: tempName, number: number})
        } 
        this.setState({
            selectedContacts: tempSelected
        })
        this.dismissModal()
    }

    render() {
        const { selectFromContacts, onContactItemClicked } = this
        const { navigation } = this.props
        const { callMenuVisible, chatMenuVisible, contactMenuVisible, contacts, selectedContacts } = this.state

        return (
            <View style={AppStyles.mainContainer}>
                <Header
                    type='Back'
                    navigation={navigation}
                />
                <ScrollView>
                    <HeadingContainer
                        headingImage={SearchIcon}
                        headingText='Talk to Someone'
                    />
                    <View style={[styles.cardContainer, AppStyles.hCenter]}>

                        {
                            selectedContacts.map((item, index) => {
                                return (
                                    <PhoneCard
                                        key={index}
                                        name={item.name}
                                        phoneNumber={item.number}
                                        bgColor={Colors.gray}
                                        onPress={() => callPhone(item.number)}
                                    />
                                )
                            })
                        }
                        <Button
                            label='Select from contacts'
                            bgColor={Colors.orange}
                            onPress={selectFromContacts}
                        />
                        <PhoneCard
                            name='Call the DoD Help Line'
                            phoneNumber='877-995-5247'
                            bgColor={Colors.lightGreen}
                            onPress={() => this.onCallMenuClicked()}
                        />
                        <ChatCard
                            name='Chat with DoD Safe Helpline'
                            onPress={() => this.onChatMenuClicked()}
                        />
                        <Overlay visible={chatMenuVisible}
                            closeOnTouchOutside animationType="zoomIn"
                            containerStyle={{ backgroundColor: 'rgba(0,131,105,0.78)' }}
                            childrenWrapperStyle={{ backgroundColor: 'transparent' }}
                            animationDuration={500}
                        >
                            <ChatMenu
                                onChat={this.onChat}
                                onGroupChat={this.onGroupChat}
                                onCancel={this.onCancel}
                            />
                        </Overlay>
                        <Overlay visible={callMenuVisible}
                            closeOnTouchOutside animationType="zoomIn"
                            containerStyle={{ backgroundColor: 'rgba(0,131,105,0.78)' }}
                            childrenWrapperStyle={{ backgroundColor: 'transparent' }}
                            animationDuration={500}
                        >
                            <CallMenu
                                onInternet={this.onInternet}
                                onCellular={() => this.onCellular('877-995-5247')}
                                onCancel={this.onCancel}
                            />
                        </Overlay>
                        <Overlay visible={contactMenuVisible}
                            closeOnTouchOutside animationType="zoomIn"
                            containerStyle={{ backgroundColor: 'rgba(0,131,105,0.78)' }}
                            childrenWrapperStyle={{ backgroundColor: 'transparent' }}
                            animationDuration={500}
                        >
                            <ScrollView>
                                {
                                    contacts.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                key={index}
                                                style={[styles.contactItem, AppStyles.hCenter]}
                                                onPress={() => onContactItemClicked(item.givenName, item.familyName, (item.phoneNumbers[0] ? item.phoneNumbers[0].number : ''))}
                                            >
                                            {
                                                item &&
                                                <Text style={styles.contactName}>{item.givenName} {item.familyName}</Text>
                                            }
                                            {
                                                item &&
                                                <Text style={styles.contactNumber}>{item.phoneNumbers ? (item.phoneNumbers[0] ? item.phoneNumbers[0].number : '') : ''}</Text>
                                            }
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </Overlay>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: Paddings.containerP
    },

    phoneCard: {
        width: width - 40,
        padding: Paddings.containerP,
        borderRadius: BorderRadii.boxBR,
        marginBottom: Margins.elementM
    },

    nameText: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        fontWeight: '600'
    },

    phoneNumberText: {
        color: 'white',
        fontSize: FontSizes.contentFS
    },

    separateBar: {
        height: 2,
        width: width - 100,
        backgroundColor: 'white',
        marginVertical: Margins.elementM
    },

    chatCard: {
        width: width - 40,
        backgroundColor: Colors.lightGreen,
        padding: Paddings.containerP,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.elementM
    },

    contactItem: {
        width: width * 2 / 3,
        backgroundColor: Colors.darkGreen,
        padding: 5
    },

    contactName: {
        color: 'white',
        fontSize: FontSizes.topicFS,
        fontWeight: '600'
    },

    contactNumber: {
        color: 'white',
        fontSize: FontSizes.contentFS
    }
})
