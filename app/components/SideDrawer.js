import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import _ from 'lodash';

import { DrawerRoutes } from '../config/routes';

// @TODO make dynamic from user account
const User = {
    'name': 'Josh Coffman',
    'avatar': {
        uri: 'https://www.facebook.com/profile/pic.php?cuid=AYhysMWe1svFVaGWVrTvDvc70SCylHuVmpLl4QKTJyGfogEIpw44oNoN2p0RkSlWJ0AoPs9T7EEmONdO-fbSx5BWUwllCmr8pnKmzeo4kzjWv-ufuZwAWtR1nKWaitV0LAzpt2rhLgXt5gcvsEMCAoVDUr5J3hyJ-0NktO_oEPkk3UKovk-m_Qq7WZwb820FERg&square_px=64'
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        paddingVertical: 4,
    },
    icon: {
        marginHorizontal: 16,
        width: 40,
        height: 40,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color:'#fff',
        margin: 16,
        fontWeight: 'bold',
    },
    linkRow: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        marginVertical: 4
    }
});

export default class SideDrawer extends Component {

    getUser(){
        return this.props.screenProps.user;
    }

    componentDidMount(){
        //alert(this.getUser().firstName);
    }

    render() {
        const { navigate } = this.props.navigation;

        // remove home route / link
        const routes = _.omit(DrawerRoutes, 'Home');

        return (
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', paddingTop: 10, marginBottom: 20}}>
                    <Image source={{uri: this.getUser().photo }} style={{width: 80, height: 80}} />
                    <Text style={{color: 'white', marginTop: 8}}>{ this.getUser().fullName }</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        {
                            _.map(routes, function(route, routeName){
                                return (
                                    <TouchableOpacity key={routeName} style={{marginBottom:5}} onPress={()=> { navigate(routeName) }}>
                                        <View style={styles.linkRow}>
                                            {
                                                route.navigationOptions.drawerIcon ? <Image source={route.navigationOptions.drawerIcon} style={styles.icon}/> : null
                                            }
                                            <Text style={styles.label}>{route.navigationOptions.title ? route.navigationOptions.title : routeName}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }

}