import React, { Component } from "react";

import { View, Image, Text, ScrollView, Dimensions } from 'react-native';
import Styles  from '../config/styles';

let window = Dimensions.get('window');

const gallery = [
    {
        'imgSrc' : "../assets/gallery-1.jpg",
        'imgCaption' : "Out surfing with my new friend",
        'imgLikes' : 24,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-2.jpg",
        'imgCaption' : "Out skiing with my new friend",
        'imgLikes' : 18,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-3.jpg",
        'imgCaption' : "Out get mauled by dogs with my new friend",
        'imgLikes' : 36,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-4.jpg",
        'imgCaption' : "Out golfing with my new friend",
        'imgLikes' : 25,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-5.jpg",
        'imgCaption' : "Out skating with my new friend",
        'imgLikes' : 8,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-6.jpg",
        'imgCaption' : "Out biking with my new friend",
        'imgLikes' : 16,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-7.jpg",
        'imgCaption' : "Out mountain biking with my new friend",
        'imgLikes' : 33,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-8.jpg",
        'imgCaption' : "Out rocking with my new friend",
        'imgLikes' : 156,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-9.jpg",
        'imgCaption' : "Out paint balling with my new friend",
        'imgLikes' : 235,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-10.jpg",
        'imgCaption' : "Out hitting the weights with my new friend",
        'imgLikes' : 89,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-11.jpg",
        'imgCaption' : "Out drinking with my new friend",
        'imgLikes' : 73,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    },{
        'imgSrc' : "../assets/gallery-12.jpg",
        'imgCaption' : "Out holding the Sun in the palms of my hands with my new friend",
        'imgLikes' : 289,
        'imgHashes': ["#Meclub","#goodvibes","#newfriendship"]
    }
];
export default class AlbumScreen extends Component {

    state = {
        'gallery' : gallery
    };

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.headerLogoWrap}>
                        <Image source={require('../assets/meclub-logo-small.png')} style={Styles.headerLogo} />
                    </View>
                    <Text style={Styles.headerTitle}>GALLERY</Text>
                    <View style={[Styles.headerTouchable, {flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}]}>
                        <View style={Styles.mediaIconWrap}><Image source={require('../assets/camera_icon_white.png')} style={{ width: 30, height: 22}} /></View>
                        <View style={Styles.mediaIconWrap}><Image source={require('../assets/video_icon_gray.png')} style={{ width: 39, height: 20, bottom: -2}} /></View>
                    </View>
                </View>
                <View style={Styles.albumViewPickerRow}>
                    <View style={[Styles.albumViewType, Styles.active]}>
                        <Image source={require('../assets/gallery_icon_dark.png')} style={Styles.viewIcon}></Image>

                    </View>
                    <View style={Styles.albumViewType}>
                        <Image source={require('../assets/list_icon_white.png')} style={Styles.viewIcon}></Image>
                    </View>
                </View>
                <ScrollView>
                    <View style={Styles.albumGridRow}>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-1.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-2.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-3.jpg')}></Image>
                    </View>
                    <View style={Styles.albumGridRow}>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-4.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-5.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-6.jpg')}></Image>
                    </View>
                    <View style={Styles.albumGridRow}>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-7.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-8.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-9.jpg')}></Image>
                    </View>
                    <View style={Styles.albumGridRow}>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-10.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-11.jpg')}></Image>
                        <Image resizeMode={'cover'} style={Styles.albumGridItem} source={require('../assets/gallery-12.jpg')}></Image>
                    </View>
                </ScrollView>
                <ScrollView style={{ display: 'none', flex: 1}} >
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <Image resizeMode={'cover'} source={require('../assets/gallery-1.jpg')} style={{ width: window.width, height: window.width,}}></Image>
                    </View>
                    <View style={Styles.albumItemDetail}>
                        <View style={Styles.albumItemActions}>
                            <View style={{ flexDirection: 'row', flex: 2,}}>
                                <Image source={require('../assets/love-icon.jpg')} style={{width: 27, height: 24, marginRight:10}}></Image>
                                <Image source={require('../assets/chat-icon.jpg')} style={{width: 24, height: 24, marginRight:10}}></Image>
                                <Image source={require('../assets/send-message-icon.jpg')} style={{width: 26, height: 24, marginRight:10}}></Image>
                            </View>
                            <View style={{flexDirection: 'row', flex: 2, justifyContent: 'center'}}>
                                <Image source={require('../assets/facebook-icon.jpg')} style={[{width: 52, height: 52, marginRight:10}, Styles.albumSocialMediaBtn]}></Image>
                                <Image source={require('../assets/instagram-icon.jpg')} style={[{width: 52, height: 52, marginRight:10}, Styles.albumSocialMediaBtn]}></Image>
                                <Image source={require('../assets/snap-icon.jpg')} style={[{width: 52, height: 52, marginRight:10}, Styles.albumSocialMediaBtn]}></Image>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 'auto'}}>
                                <Image source={require('../assets/bookmark-icon.jpg')} style={{width: 19, height: 22, marginLeft:'auto'}}></Image>
                            </View>
                        </View>
                        <View style={{ marginTop: -20}}>
                            <Text style={Styles.albumItemLikeCount}>24 likes</Text>
                            <Text style={Styles.albumItemCaption}>Out surfing with my new friend</Text>
                            <Text style={Styles.albumItemHash}>#Meclub,#goodvibes,#newfriendship</Text>
                            <Text style={Styles.albumItemPostTime}>{'1 minute ago'.toUpperCase()}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}