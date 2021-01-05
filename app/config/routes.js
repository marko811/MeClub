import React from 'react';
import { Image} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import AccountScreen from '../screens/Account';
import ActivitesScreen from '../screens/Activities';
import AgendaScreen from '../screens/Agenda';
import AlbumScreen from '../screens/Album';
import FaqScreen from '../screens/Faq';
import SideDrawer from "../components/SideDrawer";
import ChatScreen from '../screens/Chats';

//import { StackNavigator } from 'react-navigation';

export const DrawerRoutes = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Account: {
        screen: AccountScreen,
        navigationOptions: {
            title: 'My Account',
            drawerIcon: require('../assets/nav/icon-account.png')
        }
    },
    Activities: {
        screen: ActivitesScreen,
        navigationOptions: {
            title: 'My Activities',
            drawerIcon: require('../assets/nav/icon-account.png')
        }
    },
    Agenda: {
        screen: AgendaScreen,
        navigationOptions: {
            title: 'My Agenda',
            drawerIcon: require('../assets/nav/icon-history.png')
        }
    },
    Chats: {
        screen: ChatScreen,
        navigationOptions: {
            title: 'My Chats',
            drawerIcon: require('../assets/nav/icon-history.png')
        }
    },
    Album: {
        screen: AlbumScreen,
        navigationOptions: {
            title: 'My Album',
            drawerIcon: require('../assets/nav/icon-album.png')
        }
    },
    Faq: {
        screen: FaqScreen,
        navigationOptions: {
            title: 'FAQ',
            drawerIcon: require('../assets/nav/icon-info.png')
        }
    }
};

export const Drawer = DrawerNavigator(DrawerRoutes, {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    drawerWidth: 250,
    contentComponent: SideDrawer,
    contentOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: 'white',
        style: {
            marginVertical: 100,
            marginHorizontal: 0,
            flex: 1,
            paddingTop: 15
        }
    }
});