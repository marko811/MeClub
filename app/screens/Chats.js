import React, { Component } from "react";

import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from '../config/styles';


import ChatMessageInput from '../components/ChatMessageInput';



import menuIcon from '../assets/nav/icon-menu.png';

export default class ChatsScreen extends Component {

    constructor() {
        super();

        // bind this since we use on TouchableHighlight
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(){
        this.props.navigation.navigate('DrawerToggle')
    }


    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.headerLogoWrap}>
                        <Image source={require('../assets/activities/surfing.png')} style={Styles.chatActivityIcon}/>
                    </View>
                    <Text style={Styles.headerTitle}>{'Surfing\nJan 31, 2016\n2:30pm - 4:20pm'.toUpperCase()}</Text>
                    <TouchableOpacity
                        onPress={this.toggleDrawer}
                        style={Styles.headerTouchable}>
                        <Image source={menuIcon} style={{width: 27, height: 19, marginRight: 15}} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={Styles.scrollContainer}>
                    <Text style={chat.timeStamp}><Text style={{fontWeight:'bold'}}>Yesterday,</Text> 6:15PM</Text>
                    <View style={{alignItems: 'flex-end'}}>
                        <View style={chat.bubbleWrap}>
                            <Text style={chat.chatterName}>Rick Anderson, HOST</Text>
                            <View style={chat.senderBubble}>
                                <Image style={[chat.messageAvatar, {marginRight: 15}]} source={require('../assets/chat-host.png')} />
                                <Text style={chat.messageText}>Lorem ipsum dolor sit amet, sea eu hinc nullam, mea hinc deseruisse dissentiunt at, vi vendo partinax eu eos. ferri</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={chat.timeStamp}><Text style={{fontWeight:'bold'}}>Today,</Text> 8:15PM</Text>
                    <View style={{alignItems: 'flex-start'}}>
                        <View style={chat.bubbleWrap}>
                            <Text style={chat.chatterName}></Text>
                            <View style={[chat.senderBubble, chat.recipient]}>
                                <Text style={chat.messageText}>Lorem ipsum dolor sit amet, sea eu hinc nullam, mea hitus</Text>
                                <Image style={[chat.messageAvatar, {marginLeft: 15}]} source={require('../assets/chat_ava_1.jpg')} />
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <View style={chat.bubbleWrap}>
                            <Text style={chat.chatterName}>Rick Anderson, HOST</Text>
                            <View style={chat.senderBubble}>
                                <Image style={[chat.messageAvatar, {marginRight: 15}]} source={require('../assets/chat-host.png')} />
                                <Text style={chat.messageText}>Lorem ipsum dolor sit amet, sea eu hinc nullam, mea hinc deseruisse dissentiunt at, vi vendo partinax eu eos. ferri</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>


                <ChatMessageInput />


            </View>
        )

    }

}

const chat = StyleSheet.create({
    timeStamp: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    bubbleWrap: {
        width: '85%',
        justifyContent: 'center',

    },
    chatterName: {
        color: '#fff',
        fontSize: 8,
    },
    senderBubble: {
        borderRadius: 15,
        backgroundColor: '#00609c',
        paddingHorizontal: 15,
        paddingVertical: 5,
        flex: 1,
        flexDirection: 'row',
        marginTop: 11,
        marginBottom: 6,
        justifyContent: 'center',
    },
    recipient: {
        backgroundColor: "#898989"
    },
    messageText: {
        fontSize: 14,
        color: '#fff',
        flex: 1,
        lineHeight: 22,
        marginBottom: 10,
    },
    messageAvatar: {
        width: 57,
        height: 57,
        marginTop: 5,
        borderRadius: 50,
    },

});