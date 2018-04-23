// React
import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Communications from 'react-native-communications'
import Overlay from 'react-native-modal-overlay'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

// Assets
import Header from '../Components/Header'
import HeadingContainer from '../Components/HeadingContainer'
import TopicButton from '../Components/TopicButton'
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

const CardContainer = ({ navigation }) => {
    return (
        <View style={[styles.cardContainer, AppStyles.hCenter]}>
            {/*<PhoneCard
                name='Stephan Smith'
                phoneNumber='480-238-1235'
                bgColor={Colors.gray}
                onPress={() => callPhone('480-238-1235')}
            />*/}
            <TopicButton
                text='Select from contacts'
            />
            <PhoneCard
                name='Call the DoD Help Line'
                phoneNumber='877-995-5247'
                bgColor={Colors.lightGreen}
                onPress={() => callPhone('877-995-5247')}
            />
            <ChatCard
                name='Chat with DoD Safe Helpline'
                onPress={() => chat(navigation)}
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
        </View>
    )
}


export default class TalkToSomeoneScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            chatMenuVisible: false
        }
    }

    dismissModal() {
        this.setState({
            chatMenuVisible: false
        })
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
        this.dismissModal();
    }

    onChatMenuClicked = () => {
        // const { navigate } = navigation
        // navigate('ChatScreen', { chatType: 'Group' })
        this.setState({
            chatMenuVisible: true
        })
    }

    render() {
        const { navigation } = this.props
        const { chatMenuVisible } = this.state

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
                    {/*<CardContainer
                            navigation={navigation}
                        />*/}
                    <View style={[styles.cardContainer, AppStyles.hCenter]}>
                        <TopicButton
                            text='Select from contacts'
                        />
                        <PhoneCard
                            name='Call the DoD Help Line'
                            phoneNumber='877-995-5247'
                            bgColor={Colors.lightGreen}
                            onPress={() => callPhone('877-995-5247')}
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
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: Paddings.containerP
    },

    phoneCard: {
        width: width - 40,
        padding: Paddings.containerP,
        borderRadius: BorderRadii.boxBR,
        marginTop: Margins.containerM
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
        marginTop: Margins.containerM
    }
})
