import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const homeIcon = require('../assets/icons/home.png');
const searchIcon = require('../assets/icons/search.png');
const musicIcon = require('../assets/icons/music.png');
const profileIcon = require('../assets/icons/user.png');

export function Footer({navigation, screen}) {
    return (
        <View style={styles.container}>
            <View style={styles.innerBox}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={homeIcon} style={[styles.iconStyle, screen ==='Main' ? {tintColor:'rgba(255,255,255,1.0)'} : {}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Image source={searchIcon} style={[styles.iconStyle, screen ==='Search' ? {tintColor:'rgba(255,255,255,1.0)'} : {}]} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={musicIcon} style={[{height: 30,width: 30,tintColor: '#fff',opacity:0.75}, screen ==='Song' ? {tintColor:'rgba(255,255,255,1.0)'} : {}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Image source={profileIcon} style={[styles.iconStyle, screen ==='Profile' ? {tintColor:'rgba(255,255,255,1.0)'} : {}]} />
                </TouchableOpacity>

                {/* <Text>
                    {screen}
                </Text> */}

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
        backgroundColor: 'rgba(255,255,255,0.2)',
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
        justifyContent: 'space-around',
    },
    iconStyle: {
        height: 30,
        width: 30,
        tintColor: '#fff',
    }
})