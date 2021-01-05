import React from 'react';
import { Drawer, Tabs } from './config/routes';
import { View } from 'react-native';
import firebase from 'react-native-firebase';
import JoinScreen from './screens/Join';
import { UserRepository } from './repositories/User';
import _ from 'lodash';

export default class App extends React.Component {

    constructor() {
        super();

        this.unsubscriber = null;

        this.state = {
            user: null,
        };
    }

    updateUser(user, firebaseAuthUser){

        if (! user){
            // user entity not in Firebase

            // save the user's profile into the database so we can list users, use them in Security and Firebase Rules, show profiles, etc.

            return UserRepository
                .upsert(firebaseAuthUser.uid, {
                    email: firebaseAuthUser.email,
                    displayName: firebaseAuthUser.displayName,
                    photoUrl: firebaseAuthUser.photoURL
                })
                .then((doc) => this.loadUserById(firebaseAuthUser.uid));
        }

        //console.warn(JSON.stringify(user));

        this.setState({"user": user});
    }

    loadUserById(id){
        UserRepository
            .find(id)
            .then((user) => this.setState({ user: user }));

    }
    /**
     * Listen for any auth state changes and update component state.
     */
    componentDidMount() {

        this.unsubscriber = firebase.auth().onAuthStateChanged((firebaseAuthUser) => {
            if (firebaseAuthUser){
                UserRepository
                    .find(firebaseAuthUser.uid)
                    .then((user) => this.updateUser(user, firebaseAuthUser));

            } else {
                this.setState({ user: null });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }

    render() {

        if (! this.state.user) {
            return <JoinScreen />;
        }

        return (
            <View style={{flex: 1}}>
                <Drawer style={{backgroundColor: '#08062c'}} screenProps={ {"user": this.state.user} } />
            </View>
        );
    }

}