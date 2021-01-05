import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

const DrawerIcon = ({ iconName, iconSize, iconColor, polygonWidth, polygonHeight }) => (
    <Image source={require('../assets/polygon.png')} style={styles.iconWrapper}>
        <Icon name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
    </Image>
);

const styles = StyleSheet.create({
    iconWrapper: {
        width: 77.4,
        height: 44
    },
    icon: {
        position: 'absolute',
        top: 8,
        left: 28
    }
});

export default DrawerIcon;