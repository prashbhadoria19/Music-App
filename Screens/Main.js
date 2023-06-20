import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Footer } from '../Components/Footer';

export function Main({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>
                Home Screen
            </Text>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})