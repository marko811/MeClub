/**
 * Import external dependencies.
 */
import React, { Component } from "react";

import firebase from 'react-native-firebase';

import PropTypes from 'prop-types';

import * as _ from 'lodash';

import {
    Platform,
    PermissionsAndroid,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

/**
 * Import local dependencies.
 */
import menuIcon from '../assets/nav/icon-menu.png';
import {UserRepository} from "../repositories/User";
import {ActivityRepository} from "../repositories/Activity";

let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null
    },
    header: {
        backgroundColor: '#08062c',
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
        flex: 1,
        right: 10
    },
    headerText: {
        color:'#fff',
        fontWeight:'bold',
        fontSize: 18
    },
    textInput: {
        height: 38,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 5,
        color: '#333',
        paddingLeft: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        marginHorizontal: 40,
        marginTop: 10
    },
    content: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    activity: {
        width: 66,
        height: 78,
        marginHorizontal: 3
    },
    mapMarker: {
        zIndex: 1000,
    }
});

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 };

export default class HomeScreen extends Component {

    state = {
        containerHeight: 0,
        mounted: false,
        location: null,
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        myPosition: null,
        markers: [
            {
                key: "Work",
                title: "Current Location",
                description: "Work",
                latlng: {
                    latitude: 33.9825661,
                    longitude: -118.4266267
                },
                pincolor: "red"
            }
        ],
        activities: []

    };
    // @TODO - rung slider on right overlay for date filtering
    getUser(){
        return this.props.screenProps.user;
    }

    constructor() {
        super();

        // bind this since we use on TouchableHighlight
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    toggleDrawer(){
        this.props.navigation.navigate('DrawerToggle')
    }

    updatePosition(permissionResponse){
        console.log('Fine Location permission: ', permissionResponse);

        navigator.geolocation.getCurrentPosition(
            position => {
                console.log('Got position:', position);
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            GEOLOCATION_OPTIONS
        );

        this.watchID = navigator.geolocation.watchPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            }
        );

        // See: https://github.com/airbnb/react-native-maps/issues/1033
        // Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a repaint.
        setTimeout(() => this.setState({containerHeight: 1}), 250);
    }

    watchLocation() {
        // eslint-disable-next-line no-undef

        console.log('Watching location...');

        this.watchID = navigator.geolocation.watchPosition((position) => {

            console.log('Position:', position);

            const myLastPosition = this.state.myPosition;

            const myPosition = position.coords;

            if (! _.isEqual(myPosition, myLastPosition)) {
                console.log('Updating position:', myPosition);
                this.setState({ myPosition });
            }
        }, null, GEOLOCATION_OPTIONS);
    }

    componentWillUnmount() {
        if (this.watchID) navigator.geolocation.clearWatch(this.watchID);
    }

    updateLoc(){
        console.log('Updating current location...');
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Position', position);
                //alert(JSON.stringify(position));

                this.setState({region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }});

            }, (error) => {
                alert("Geolocation error: "+error.message);
            }
            // will timeout: {enableHighAccuracy: true, timeout: 10000, maximumAge: 0}
        );
    }

    componentDidMount() {
        console.log('Mounted');

        this.setState({ mounted: true });

        //console.warn(_.first(this.getUser().getActivities()).id);

        //this.setState({ activities: this.getUser().getActivities() });

        UserRepository.getActivities(this.getUser()).then(resp => {
           console.warn(resp);
        });

        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Your Location',
                    'message': 'MeClub needs access to your location ' +
                    'so you can see the map.'
                }
            ).then(granted => {
                if (granted){
                    console.log('Granted! looking up current', granted);
                    this.updatePosition();
                }
            });

        } else {
            this.updatePosition();
        }

        /**
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Your Location',
                    'message': 'MeClub needs access to your location ' +
                    'so you can see the map.'
                }
            ).then(granted => {
                console.log('granted:', granted);
                if (granted && this.mounted) this.updatePosition();
            });

        } else {
            this.updatePosition();
        }
*/
        /**
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Your Location',
                'message': 'MeClub needs access to your location ' +
                'so you can see the map.'
            }
        ).then(this.updatePosition);
*/
        /**
         * navigator.geolocation.getCurrentPosition(
         (position) => {
                Geocoder.geocodePosition({lat: position.coords.latitude, lng: position.coords.longitude}).then((results)=> {
                    let result = results[0];
                    Address.saveFromMap(result);
                    this.setState({
                        addressText: result.formattedAddress,
                        address: result
                    })
                });
                this.setState({
                    coordinates: {
                        latitude: position.coords.latitude, longitude: position.coords.longitude
                    }
                });
                this.googleMap.animateToRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.02305,
                    longitudeDelta: 0.01075
                })
            },
         (error) => alert(error),
         {timeout: 60000, maximumAge: 10000}
         );
         * @type {Number}
         */
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {

        return (
            //Setting a value (padding) we can change to force a repaint
            <View style={[styles.container, {paddingBottom: this.state.containerHeight }]} >
                <View style={styles.header}>
                    <Image source={require('../assets/meclub-logo-small.png')} style={styles.headerLogo}/>
                    <Text style={styles.headerTitle}>SELECT YOUR ACTIVITY</Text>
                    <TouchableOpacity
                        onPress={this.toggleDrawer}>
                        <Image source={menuIcon} style={{width: 27, height: 19, marginRight: 15}} />
                    </TouchableOpacity>
                </View>
                <TextInput underlineColorAndroid="transparent"
                           placeholder="Type in any address, public site or business" placeholderTextColor="grey"
                           style={styles.textInput} onChangeText={(text) => this.setState({location: text})} value={this.state.location}
                />
                <View style={styles.content}>
                    <MapView
                        provider={ PROVIDER_GOOGLE }
                        showsUserLocation={ true }
                        followsUserLocation={ true }
                        showsMyLocationButton={ true }
                        showsScale={ true }
                        showsTraffic={ false }
                        region={ this.state.region }
                        onRegionChangeComplete={ this.onRegionChange } style={{height: '100%', width: '100%'}}
                    >
                        {this.state.markers.map(marker => (
                            <MapView.Marker
                                key={marker.key}
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description} pinColor={marker.color}
                            />
                        ))}
                    </MapView>
                </View>
                <View>
                    <ScrollView horizontal={true} style={{height: 80, backgroundColor: '#08062c'}}>
                        <Image source={require('../assets/activities/chats.png')} style={styles.activity}/>
                        <Image source={require('../assets/activities/create-activity.png')} style={styles.activity}/>
                        <Image source={require('../assets/activities/add-activity.png')} style={styles.activity}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

/**
 * {this.state.activities.map(activity => { ActivityRepository.find(activity.id) } => {
                            <Image source={{ uri: activity.icon }} style={styles.activity}/>
                        })}
 <Image source={require('../assets/activities/help-friends.png')} style={styles.activity}/>
 <Image source={require('../assets/activities/watch-sports.png')} style={styles.activity}/>
 <Image source={require('../assets/activities/social-hour.png')} style={styles.activity}/>
 <Image source={require('../assets/activities/workout.png')} style={styles.activity}/>
 <Image source={require('../assets/activities/beach.png')} style={styles.activity}/>
 <Image source={require('../assets/activities/hiking.png')} style={styles.activity}/>
 */