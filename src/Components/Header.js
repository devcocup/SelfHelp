// React
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { NavigationActions } from 'react-navigation'
import SQLite from 'react-native-sqlite-2'

// Global Styles & Constants
import AppStyles from '../Lib/AppStyles'
import Constants from '../Lib/Constants'

const { height,width } = Dimensions.get('window')

const HomeIcon = require('../Assets/Images/home.png')
const MenuIcon = require('../Assets/Images/nav_menu.png')
const CheckMarkIcon = require('../Assets/Images/pencil.png')
const DeleteIcon = require('../Assets/Images/delete.png')
const SaveIcon = require('../Assets/Images/save.png')

const goToScreen = (ScreenName, content, navigation) => {
    const { navigate } = navigation
    navigate(ScreenName ? ScreenName : '', { content })
}

const goBackScreen = (navigation) => {
    const { goBack } = navigation
    goBack()
}

const goJournal = (navigation) => {
    const db = SQLite.openDatabase({name: 'securityDB', createFromLocation: '/data/securityDB.sqlite'})
    db.transaction((txn) => {
        txn.executeSql('CREATE TABLE IF NOT EXISTS Security(id INTEGER PRIMARY KEY NOT NULL, pin_number VARCHAR(6), security_question VARCHAR(100), security_answer VARCHAR(200))')
        txn.executeSql('SELECT * FROM `security`', [], (tx, res) => {
            let tempSecurity = []
            for (let i = 0; i < res.rows.length; ++i) {
                tempSecurity.push(res.rows.item(i))
            }
            if (tempSecurity.length > 0) {
                goToScreen('EnterSecurityPinScreen', tempSecurity[0], navigation)
            } else {
                goToScreen('CreateSecurityPinScreen', tempSecurity[0], navigation)
            }
        })
    })
}

const goHome = (navigation) => {
    return navigation.dispatch(NavigationActions.reset(
    {
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'MainScreen'})
        ]
    }))
}


const Header = ({ type, isMain, onDelete, onSave, navigation, displaySaveButton = true }) => {
    let headerText = (type === 'Home') ? '' : 'Back'

    return (
        <View style={styles.headerStyle}>
            {
                (type === 'Back' || type === 'Coloring') &&
                <View style={[styles.titleArea, AppStyles.vCenter]}>
                    <View style={[styles.backArea, AppStyles.center]}>
                        <TouchableOpacity onPress={() => goBackScreen(navigation)}>
                            <Text style={styles.textStyle}>{headerText}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.restArea, AppStyles.center]}>
                        {
                            onDelete &&
                            <TouchableOpacity
                                onPress={onDelete}
                            >
                                <Image
                                    source={DeleteIcon}
                                    style={styles.deleteIcon}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            }
            {
                (type === 'Home') &&
                <View style={[styles.titleArea, AppStyles.hCenter]}>
                    <Text style={styles.textStyle}>{headerText}</Text>
                </View>
            }
            {
                (type === 'Coloring' && displaySaveButton) &&
                <View style={[styles.saveArea, AppStyles.center]}>
                    <TouchableOpacity onPress={onSave}>
                        <Image
                            source={SaveIcon}
                            style={styles.saveIcon}
                        />
                    </TouchableOpacity>
                </View>
            }
            {
                !isMain && 
                <View style={[styles.mainCheckArea, AppStyles.center]}>
                </View>
            }
            {
                !isMain &&
                <View style={[styles.menuArea, AppStyles.center]}>
                        <TouchableOpacity
                            onPress={() => goHome(navigation)}
                        >
                            <Image
                                source={HomeIcon}
                                style={styles.homeIcon}
                            />
                        </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: Constants.Colors.secondaryBgColor
    },

    textStyle: {
        color: 'white',
        fontSize: Constants.FontSizes.menuFS,
        fontWeight: 'bold',
    },

    titleArea: {
        flex: .66,
        flexDirection: 'row',
        paddingLeft: 10,
    },

    backArea: {
        flex: .5,
        borderRightWidth: 2,
        borderRightColor: Constants.Colors.lightGreen
    },

    restArea: {
        flex: .5
    },

    deleteIcon: {
        width: 35,
        height: 35
    },

    saveArea: {
        flex: .17,
        borderLeftWidth: 2,
        borderLeftColor: Constants.Colors.lightGreen
    },

    saveIcon: {
        width: 30,
        height: 35
    },

    checkArea: {
        flex: .17,
        borderLeftWidth: 2,
        borderLeftColor: Constants.Colors.lightGreen
    },

    mainCheckArea: {
        flex: .17
    },

    checkIcon: {
        width: 35,
        height: 35
    },

    menuArea: {
        flex: .17,
        borderLeftWidth: 2,
        borderLeftColor: Constants.Colors.lightGreen
    },

    homeIcon: {
        width: 40,
        height: 40
    }

})

export default Header
