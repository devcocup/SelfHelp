// React
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native'

export default class VetCentersContainer extends Component {
    findVetCenters () {
        Linking.openURL("https://www.vets.gov/facilities/?facilityType=vet_center")
    }

    render() {
        return(<TouchableOpacity onPress={this.findVetCenters}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Vet Centers</Text>
                </View>
                <View style={styles.body}>
                    <Text>Vet Centers offer community based counseling and other services to eligible active duty
                        Service members and Veterans. To find your closest Vet Center click this section.</Text>
                </View>
            </View>
        </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 20,
        color: 'orange',
        fontWeight: '600'
    },

    body: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10
    }
})