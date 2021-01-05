import React, { Component } from "react";

import Styles  from '../config/styles';

import { View, Image, Text, ScrollView, TouchableOpacity, FlatList, CheckBox } from 'react-native';

import { ActivityRepository } from "../repositories/Activity";

import _ from 'lodash';

import {UserRepository} from "../repositories/User";

export default class ActivitiesScreen extends Component {

    constructor(){
        super();

        this.state = {
          "activities": []
        };

        //ActivityRepository.syncActivities();

        ActivityRepository.all().then((activities) => {
            this.setState({ activities });
        });
    }

    _getUser(){
        return this.props.screenProps.user;
    }

    _onPressItem = (id) => {
        alert(id);
    };

    _toggleActivity(checked, id){

        let user = this._getUser();

        let activities = _.get(user, 'activities', []);

        if (checked){
            // add to user activities
            alert('Added ' + id);

            if (! _.includes(activities, id)){

                // can we do atomic update? also change to save a REFERENCE!

                activities.push(id);

                user.activities = activities;

                UserRepository.save(user);
            }

        } else {
            // remove from user activities
            alert('Removed ' + id);
        }

        //console.warn('User', JSON.stringify(this._getUser()));
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => {

        return (
            <View style={{ padding: 10, borderColor: '#999999', borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox onValueChange={(checked) => this._toggleActivity(checked, item.id) } />

                <Image source={ {"uri": item.icon }} style={{ width: 66, height: 78, marginHorizontal: 3 }} />

                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ item.name }</Text>
                    <Text style={{ fontSize: 12 }}>{ item.categories.join(', ') }</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <Image source={require('../assets/background.png')} style={Styles.container} resizeMode={Image.resizeMode.cover}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../assets/meclub-logo-small.png')} style={Styles.headerLogo}/>
                    </TouchableOpacity>
                    <Text style={Styles.headerTitle}>ACTIVITIES</Text>
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    <FlatList
                        data={ this.state.activities }
                        keyExtractor={ this._keyExtractor }
                        renderItem={ this._renderItem }
                    />
                </ScrollView>
            </Image>
        );
    }
}