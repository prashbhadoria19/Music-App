import React,{useCallback,useState,useEffect} from "react";
import { Text,StyleSheet, View, TouchableOpacity, Image, TextInput, Keyboard, Platform} from "react-native";
import { StatusBar } from "expo-status-bar";
import {Footer} from '../Components/Footer';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync();

export function Search({navigation}){

    const screen="Search";


    // const [deviceType,setDeviceType] = useState('');

    // const getDevice = Platform.OS;

    // useEffect(() => {
    //     setDeviceType(getDevice);
    // },[])


    // const [searchQ,setSearchQ] = useState('');

    // const handleInputChange = (text) => {
    //     setSearchQ(text);
    //     console.log(text);
    // }

    

    const back = require('../assets/icons/back.png');
    const search = require('../assets/icons/search.png');

    // const [isKeyboardOpen,setIsKeyboardOpen] = useState(false);


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
                <View style={styles.srchHeader}>
                    <View style = {styles.hdrItems}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Image source={back} style ={[styles.imgIcons, {marginLeft:5}]}/>
                        </TouchableOpacity>
                        {/* <Image source={search} style ={styles.imgIcons}/> */}
                        <TextInput style={styles.srchText} placeholder="Search your favourite songs" autoFocus={true} />
                    </View>
                </View>

                {/* {
                    deviceType ==='android' &&
                    <Text>This is an android device</Text>
                }{
                    deviceType ==='ios' &&
                    <Text>This is an iOS device</Text>
                } */}

                <StatusBar style="auto"/>
            </View>
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
        alignSelf:'auto',

    },
    srchHeader:{
        height : 70,
        width:'70%',
        marginTop:45,
        padding: 15,
        flexDirection: 'row',
        gap: 15,
    },
    imgIcons:{
        height:25,
        width:25,
        tintColor:'#fff',
        // transform:[{
        //     rotate:'180deg',
        // }]
    },
    hdrItems:{
        width:'147%',
        flexDirection:'row',
        padding:5,
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 10,
    },
    srchText: {
        left:8,
        fontSize: 16,
        color: '#fefefe',
        opacity: 0.5,
    },
})