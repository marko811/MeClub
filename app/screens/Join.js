import React, { Component } from "react";

import { View, Image, Text, TouchableOpacity } from 'react-native';

import { AccessToken, LoginManager } from 'react-native-fbsdk';

import firebase from 'react-native-firebase';

import Styles  from '../config/styles';

export default class JoinScreen extends Component {

    joinWithFacebook(){
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }

                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

                // get the access token
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                // create a new firebase credential with the token
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

                // login with credential
                return firebase.auth().signInWithCredential(credential);
            })
            .then((currentUser) => {
                alert(JSON.stringify(currentUser.toJSON()));
                console.warn(JSON.stringify(currentUser.toJSON()));
            })
            .catch((error) => {
                alert(`Login fail with error: ${error}`);
                console.log(`Login fail with error: ${error}`);
            });
    }

    render() {
        return (

            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Image source={require('../assets/meclub-logo-small.png')} style={Styles.headerLogo}></Image>
                    <Text style={Styles.headerTitle}>JOIN</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{paddingTop: 4, paddingBottom: 4, width: 80, backgroundColor: 'grey', borderColor: 'grey', borderWidth: 1, borderRadius: 5, overflow: 'hidden'}}
                        onPress={this.joinWithFacebook}>
                        <Text style={{color: '#fff', fontSize: 12, textAlign: 'center'}}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}