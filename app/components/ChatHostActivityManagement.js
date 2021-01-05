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

const manage = StyleSheet.create({
    actionsContainer: {
        flexDirection: 'row' ,
        marginBottom: 1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default class ChatHostActivityManagement extends Component {
    render() {
        return (
            <View style={manage.actionsContainer}>
                <View style={[manage.button, {flex: 2, backgroundColor: '#fbad18', marginRight: 2.5}]}>
                    <Text style={manage.buttonText}>INVITE</Text>
            </View>
                <View style={[manage.button, {flex: 1, backgroundColor: '#777a81', marginHorizontal: 2.5}]}>
                    <Text style={manage.buttonText}>UPDATE {"\n"} INFO</Text>
                </View>
                <View style={[manage.button, {flex: 1, backgroundColor: '#c31f4d', marginLeft: 2.5}]}>
                    <Text style={manage.buttonText}>DELETE {"\n"} EVENT</Text>
                </View>
            </View>
        )
    }
}