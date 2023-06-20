import React from "react";
import { Text,StyleSheet, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Footer} from '../Components/Footer';

export function Profile({navigation}){
    return(
        <View style={styles.container}>
            <Text>
                This is the Profile Screen
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={{
                    marginTop:20,
                }}>
                    Go back to Profie Screen
                </Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
            <Footer navigation={navigation}/>
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