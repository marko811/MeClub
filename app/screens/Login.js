import React, { Component } from "react";

import { View, Image, Text } from 'react-native';

import firebase from 'react-native-firebase';

import User from '../entities/User';

export default class LoginScreen extends Component {

    render() {
        return (
            <View>
                <Text>Login {User}</Text>
            </View>
        );
    }
}