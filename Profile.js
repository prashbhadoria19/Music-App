import React,{useCallback,useState,useEffect} from "react";
import { Text,StyleSheet, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Footer} from '../Components/Footer';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import db from '../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";

SplashScreen.preventAutoHideAsync();

export function Profile({navigation}){

    const screen="Profile";

    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'musics'), (snapshot) => {
        setMusicData(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    console.log("Data Fetched",musicData);

    const [fontsLoaded] = useFonts({
        'Raleway-Bold': require('../assets/fonts/Raleway/static/Raleway-Bold.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }


    return(
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.subCont}>
                <Text>
                    Data from database
                </Text>  
                <StatusBar style="auto"/>
            </View>
            <Footer navigation={navigation} screen={screen}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f7eae',
        width: '100%',
    },    
    subCont:{
        height : '100%',
        width : '100%',
        backgroundColor: 'rgba(000,000,000,0.4)',
        gap:10,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf:'auto',
        position:'relative'

    },
})