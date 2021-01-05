import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const chatAttendee = StyleSheet.create({
    actionsContainer: {
        flexDirection: 'row' ,
        marginBottom: 1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default class ChatAttendeeButtons extends Component {
    render() {
        return (
            <View style={chatAttendee.actionsContainer}>
                <View style={[chatAttendee.button, {flex: 1, backgroundColor: '#06ab4b', marginRight: 2.5}]}>
                    <Text style={chatAttendee.buttonText}>I'M IN</Text>
                </View>
                <View style={[chatAttendee.button, {flex: 1, backgroundColor: '#c31f4d', marginLeft: 2.5}]}>
                    <Text style={chatAttendee.buttonText}>I'M OUT</Text>
                </View>
            </View>
        )
    }
}