import React, { Component } from "react";

import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

import Styles  from '../config/styles';

export default class AgendaScreen extends Component {

    render() {
        return (
            <Image source={require('../assets/background.png')} style={Styles.container} resizeMode={Image.resizeMode.cover}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../assets/meclub-logo-small.png')} style={Styles.headerLogo}/>
                    </TouchableOpacity>
                    <Text style={Styles.headerTitle}>MY AGENDA</Text>
                </View>
                <ScrollView style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>

                </ScrollView>
            </Image>
        );
    }
}