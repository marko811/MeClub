import React, { Component } from "react";

import { View, Image, Text, ScrollView, TextInput, } from 'react-native';
import Styles from '../config/styles';





export default class ChatsListScreen extends Component {

    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.headerLogoWrap}>
                        <Image source={require('../assets/meclub-logo-small.png')} style={Styles.headerLogo} />
                    </View>
                    <Text style={Styles.headerTitle}>CHATS</Text>
                    <View style={Styles.headerTouchable}></View>
                </View>
                <View style={Styles.topSearchWrap}>
                    <TextInput style={[Styles.textInput, {flex: 1, borderRadius: 5,}]}
                               underlineColorAndroid="transparent"
                               placeholder="Search for activity or host name" placeholderTextColor="grey" />
                </View>
                <ScrollView>

                    <View style={Styles.chatCondensedInfo}>
                        <View style={Styles.chatAvatarWrap}>
                            <Image source={require('../assets/chat_ava_1.jpg')} style={Styles.chatImage} />
                            <Text style={Styles.chatterName}>{'cassie'.toUpperCase()}</Text>
                        </View>
                        <View style={Styles.chatDetailsWrap}>
                            <Text style={Styles.chatActivity}>{'cycling'.toUpperCase()}</Text>
                            <Text style={Styles.chatAttributes}>Beginner, Long Distance, Road</Text>
                        </View>
                        <View style={Styles.chatBadgeWrap}>

                        </View>
                        <View style={Styles.chatNextArrowWrap}>
                            <Image source={require('../assets/arrows.png')} style={{ width: 11, height: 21,}} />
                        </View>
                    </View>

                    <View style={Styles.chatCondensedInfo}>
                        <View style={Styles.chatAvatarWrap}>
                            <Image source={require('../assets/chat_ava_2.png')} style={Styles.chatImage} />
                            <Text style={Styles.chatterName}>{'peter'.toUpperCase()}</Text>
                        </View>
                        <View style={Styles.chatDetailsWrap}>
                            <Text style={Styles.chatActivity}>{'esports'.toUpperCase()}</Text>
                            <Text style={Styles.chatAttributes}>Professional, Fighting, LAN</Text>
                        </View>
                        <View style={Styles.chatBadgeWrap}>
                            <Image source={require('../assets/group_badge_1.png')} style={Styles.chatImage} />
                            
                        </View>
                        <View style={Styles.chatNextArrowWrap}>
                            <Image source={require('../assets/arrows.png')} style={{ width: 11, height: 21,}} />
                        </View>
                    </View>

                    <View style={Styles.chatCondensedInfo}>
                        <View style={Styles.chatAvatarWrap}>
                            <Image source={require('../assets/chat_ava_3.jpg')} style={Styles.chatImage} />
                            <Text style={Styles.chatterName}>{'ronald'.toUpperCase()}</Text>
                        </View>
                        <View style={Styles.chatDetailsWrap}>
                            <Text style={Styles.chatActivity}>{'skateboarding'.toUpperCase()}</Text>
                            <Text style={Styles.chatAttributes}>Professional, Racing, Road</Text>
                        </View>
                        <View style={Styles.chatBadgeWrap}>
                            <Image source={require('../assets/group_badge_2.png')} style={Styles.chatImage} />
                            
                        </View>
                        <View style={Styles.chatNextArrowWrap}>
                            <Image source={require('../assets/arrows.png')} style={{ width: 11, height: 21,}} />
                        </View>
                    </View>

                    <View style={Styles.chatCondensedInfo}>
                        <View style={Styles.chatAvatarWrap}>
                            <Image source={require('../assets/chat_ava_4.jpg')} style={Styles.chatImage} />
                            <Text style={Styles.chatterName}>{'john'.toUpperCase()}</Text>
                        </View>
                        <View style={Styles.chatDetailsWrap}>
                            <Text style={Styles.chatActivity}>{'surfing'.toUpperCase()}</Text>
                            <Text style={Styles.chatAttributes}>Beginner, Longboarding, Outdoor</Text>
                        </View>
                        <View style={Styles.chatBadgeWrap}>
                           
                        </View>
                        <View style={Styles.chatNextArrowWrap}>
                            <Image source={require('../assets/arrows.png')} style={{ width: 11, height: 21,}} />
                        </View>
                    </View>

                    <View style={Styles.chatCondensedInfo}>
                        <View style={Styles.chatAvatarWrap}>
                            <Image source={require('../assets/chat_ava_5.jpg')} style={Styles.chatImage} />
                            <Text style={Styles.chatterName}>{'joel'.toUpperCase()}</Text>
                        </View>
                        <View style={Styles.chatDetailsWrap}>
                            <Text style={Styles.chatActivity}>{'beach clean up'.toUpperCase()}</Text>
                            <Text style={Styles.chatAttributes}>Beginner, Bagging, 2 Hours</Text>
                        </View>
                        <View style={Styles.chatBadgeWrap}>                           
                        </View>
                        <View style={Styles.chatNextArrowWrap}>
                            <Image source={require('../assets/arrows.png')} style={{ width: 11, height: 21,}} />
                        </View>
                    </View>

                    <View style={Styles.chatCondensedInfo}>
                        <View style={Styles.chatAvatarWrap}>
                            <Image source={require('../assets/chat_ava_6.jpg')} style={Styles.chatImage} />
                            <Text style={Styles.chatterName}>{'susan'.toUpperCase()}</Text>
                        </View>
                        <View style={Styles.chatDetailsWrap}>
                            <Text style={Styles.chatActivity}>{'Dog Walking'.toUpperCase()}</Text>
                            <Text style={Styles.chatAttributes}>Beginner, Short Distance, Dog Park</Text>
                        </View>
                        <View style={Styles.chatBadgeWrap}>
                          
                        </View>
                        <View style={Styles.chatNextArrowWrap}>
                            <Image source={require('../assets/arrows.png')} style={{ width: 11, height: 21,}} />
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }

}