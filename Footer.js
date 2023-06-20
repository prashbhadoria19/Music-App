import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const homeIcon = require('../assets/icons/home.png');
const searchIcon = require('../assets/icons/search.png');
const musicIcon = require('../assets/icons/music.png');
const profileIcon = require('../assets/icons/user.png');

export function Footer({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={homeIcon} style={styles.iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={musicIcon} style={styles.iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={searchIcon} style={styles.iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={profileIcon} style={styles.iconStyle} />
                </TouchableOpacity>
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
        backgroundColor: 'pink',
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
        tintColor: 'black',
    }
})