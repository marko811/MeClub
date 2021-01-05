import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    PermissionsAndroid,
    ScrollView
} from 'react-native';

import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';

import { AccessToken, LoginManager } from 'react-native-fbsdk';

import { UserRepository } from '../repositories/User';
import { ActivityRepository } from '../repositories/Activity';
import { CloudStorageRepository } from '../repositories/CloudStorage';

import _ from 'lodash';

import t from 'tcomb-form-native';

import formStyles from '../forms/styles';

let Form = t.form.Form;

let window = Dimensions.get('window');

function requestCameraRollPermission() {
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
            'title': 'Camera Permission',
            'message': 'MeClub needs access to your camera ' +
            'so you can set your profile photo.'
        }
    );
}

// by default all fields are required
const Name = t.struct({
    first: t.String,
    last: t.String
});

const User = t.struct({
    id: t.String,
    name: Name,
    email: t.String,
    phoneNumber: t.maybe(t.String),
    photoUrl: t.maybe(t.String),
    promo: t.maybe(t.String) // optional
});

const FormOptions = {
    auto: 'placeholders',
    order: ['id', 'name', 'email', 'phoneNumber', 'photoUrl', 'promo'],
    label: null,
    underlineColorAndroid: 'transparent',
    placeholderTextColor: "grey",
    stylesheet: formStyles,
    fields: {
        id: {
            hidden: true
        },
        photoUrl: {
            hidden: true
        }
    }
};

export default class AccountScreen extends React.Component {

    constructor() {
        super();

        // bind this since we use on TouchableHighlight
        this.editPhoto = this.editPhoto.bind(this);

        this.state = {
            user: null
        };
    }

    componentWillMount() {
        const user = this.getUser();

        this.setState({
            "user": {
                id: user.id,
                name: {
                    first: user.firstName,
                    last: user.lastName
                },
                email: user.email,
                phoneNumber: user.phoneNumber,
                promo: user.promo,
                photoUrl: user.photoUrl
            }
        });
    }

    onChange(value) {
        this.setState({"user": value});
    }

    onSave() {
        let origUser = this.getUser();

        let form = this.refs.form;

        let user = form.getValue();

        if (user) { // if validation fails, value will be null
            //console.warn('form model', user); // value here is an instance of User

            if (! _.isEqual(user.email, origUser.email)){

                //console.warn('Updating email since it changed...');

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
                    .then((data) => {
                        // create a new firebase credential with the token
                        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

                        return firebase.auth().currentUser.reauthenticateWithCredential(credential);
                    })
                    .then((currentUser) => {

                        firebase.auth().currentUser.updateEmail(user.email).then((response) => {
                            console.warn(JSON.stringify(response));
                        }).catch((e) => {
                            console.error(e);
                        });
                    })
                    .catch((error) => {
                        alert(`Authentication fail with error: ${error}`);
                        console.error(`Login fail with error: ${error}`);
                    });
            }

            console.warn(JSON.stringify(user));

            UserRepository.save(user);

            alert('Saved!');
        }
    }

    getUser(){
        console.warn(this.props.screenProps.user);
        return this.props.screenProps.user;
    }

    goToActivities(){
        this.props.navigation.navigate('Activities');
    }

    updateUser(data){
        this.setState({
            "user": _.extend({}, this.state.user, data)
        });
    }

    editPhoto(){

        requestCameraRollPermission().then((r) => {
            if (r === PermissionsAndroid.RESULTS.GRANTED){
                this.selectPhotoTapped();
            }
        });
    }

    selectPhotoTapped() {

        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.warn('ImagePicker Response', response);

            if (response.didCancel) {
                console.warn('User cancelled photo picker');
            }
            else if (response.error) {
                console.warn('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.warn('User tapped custom button: ', response.customButton);
            }
            else {
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                /**
                 * fileName
                 * longitude
                 * path: path on device
                 * timestamp
                 * uri: abs path on device (local or could be cloud?)
                 * data: binary data
                 *
                 */

                this.updateUser({ "photoUrl": 'data:' + response.type + ';base64,' + response.data });
            }
        });
    }

    render() {
        return (
            <Image source={require('../assets/background.png')} style={styles.container} resizeMode={Image.resizeMode.cover}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={require('../assets/meclub-logo-small.png')} style={styles.headerLogo}/>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>PROFILE</Text>
                </View>
                <ScrollView style={styles.content}>

                    <View style={{flexDirection: 'row'}}>
                        <View>
                            {_.get(this.state, 'user.photoUrl') ? <Image style={{width: 80, height: 80, marginBottom: 10}} source={{uri: this.state.user.photoUrl }} /> : null}
                            <TouchableOpacity
                                style={{paddingTop: 4, paddingBottom: 4, width: 80, backgroundColor: 'grey', borderColor: 'grey', borderWidth: 1, borderRadius: 5, overflow: 'hidden'}}
                                onPress={this.editPhoto}>
                                <Text style={{color: '#fff', fontSize: 12, textAlign: 'center'}}>EDIT PHOTO</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, paddingLeft: 10}}>
                            {/*
                            <TextInput underlineColorAndroid="transparent"
                                       placeholder="First Name" placeholderTextColor="grey"
                                       style={styles.textInput} onChangeText={(text) => this.setState({user: {name: {first: text}}})} value={this.state.user.name.first}
                            />

                            <TextInput underlineColorAndroid="transparent"
                                       placeholder="Last Name" placeholderTextColor="grey"
                                       style={styles.textInput} onChangeText={(text) => this.setState({user: {name: {last: text}}})} value={this.state.user.name.last}
                            />
                            */}
                        </View>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={[styles.headerText, {marginBottom: 20}]}>ACCOUNT</Text>

                        <Form
                            ref="form" type={ User } value={ this.state.user } onChange={ this.onChange.bind(this) } options={ FormOptions }
                        />

                        {/*
                        <TextInput underlineColorAndroid="transparent"
                                   placeholder="Email Address" placeholderTextColor="grey" keyboardType="email-address"
                                   style={styles.textInput} onChangeText={(text) => this.syncState('email', text)} value={this.state.user.email}
                        />


                        <TextInput underlineColorAndroid="transparent"
                                   placeholder="Mobile Phone" placeholderTextColor="grey" keyboardType="phone-pad"
                                   style={styles.textInput} onChangeText={(text) => this.setState({user: {phoneNumber: text}})} value={this.state.user.phoneNumber}
                        />

                        <TextInput underlineColorAndroid="transparent"
                                   placeholder="Promo Code" placeholderTextColor="grey"
                                   style={styles.textInput} onChangeText={(text) => this.setState({user: {promo: text}})} value={this.state.user.promo}
                        />
                        */}

                        <View style={{alignItems: 'center'}}>

                            <TouchableOpacity onPress={this.goToActivities.bind(this)}>
                                <Image style={{width: window.width / 3}} resizeMode="contain" source={require('../assets/activities-i-like.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onSave.bind(this)}>
                                <Image style={{width: window.width / 2}} resizeMode="contain" source={require('../assets/3-circles-proceed.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    header: {
        //backgroundColor:'#81c04d',
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLogo:{
        marginLeft: 10,
        width: 80,
        height: 74
    },
    headerTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 18,
        flex:1,
        left: -37
    },
    headerText: {
        color:'#fff',
        fontWeight:'bold',
        fontSize: 18
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    }
});
