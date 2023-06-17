import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const homeIcon = require('../assets/icons/home.png');
const searchIcon = require('../assets/icons/search.png');
const musicIcon = require('../assets/icons/music.png');
const profileIcon = require('../assets/icons/user.png');

export function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <Image source={homeIcon} style={styles.iconStyle} />
                <Image source={musicIcon} style={styles.iconStyle} />
                <Image source={searchIcon} style={styles.iconStyle} />
                <Image source={profileIcon} style={styles.iconStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '96%',
        position: 'absolute',
        bottom: 7,
        // backgroundColor: 'rgba(000,000,000, 0.2)',
        backgroundColor: 'black',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    innerBox: {
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconStyle: {
        height: 30,
        width: 30,
        tintColor: '#fff',
    }
})