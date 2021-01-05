import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,   
    TouchableOpacity
} from 'react-native';

const chatHost = StyleSheet.create({
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

export default class ChatHostUpdateEventButton extends Component {
    render() {
        return (
            <View style={chatHost.actionsContainer}>
                <View style={[chatHost.button, {flex: 1, backgroundColor: '#777a81'}]}>
                    <Text style={chatHost.buttonText}>UPDATE EVENT INFO</Text>
                </View>
            </View>
        )
    }
}