import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,

} from 'react-native';

const chat = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ebebeb',
        height: 25,
        fontSize: 14,
        paddingVertical: 1,
        paddingHorizontal:5,
    }
});

export default class ChatMessageInput extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', backgroundColor: '#fff', padding: 5, alignItems: 'center'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <Image source={require('../assets/report-button.png')} style={{width: 45, height: 45, borderRadius: 50,}} />
                </View>
                <TextInput underlineColorAndroid="transparent" style={[chat.textInput, {flex: 4,}]}
                           placeholder="Type a message..." placeholderTextColor="grey" />
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <Text>Send</Text>
                </View>
            </View>
        )
    }
}