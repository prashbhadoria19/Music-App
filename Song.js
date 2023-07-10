import React,{useCallback,useState,useEffect} from "react";
import { Text,StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Footer} from '../Components/Footer';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync();

export function Song({navigation}){

    const screen="Song";

    const back = require('../assets/icons/back.png');
    const musImage = require('../assets/musImage.jpeg');
    const musicImage = require('../assets/musicImage.jpg');
    const next = require('../assets/icons/next.png');
    const shuffle = require('../assets/icons/shuffle.png');
    const repeat = require('../assets/icons/repeat.png');
    const play = require('../assets/icons/play.png');

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
                
                <View style={styles.hdr}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home") }>
                        <Image source={back} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <View style={styles.shortLine}>
                    </View>
                </TouchableOpacity>
                
                <View style={styles.musicCard}>
                    <View style={styles.insideCard}>
                        <Image source={musicImage} style={styles.insideImage}/>
                    </View>
                </View>

                <Text style={styles.musicName}>
                    Resistance
                </Text>
                <Text style={styles.musicSinger}>
                    Muse
                </Text>
                <StatusBar style="light"/>

                <View style={styles.row}>
                    <TouchableOpacity>
                        <Image source={repeat} style={{tintColor:'#fff'}}/>
                    </TouchableOpacity>
                    <View style={styles.miniRow}>
                        <TouchableOpacity>
                            <Image source={next} style={{width:33,height:33,transform:[{rotate:'180deg'}],tintColor:'#fff'}}/>
                        </TouchableOpacity>
                        <View style={styles.playButton}>
                            <TouchableOpacity>
                                <Image source={play}/>
                            </TouchableOpacity>
                        </View>
                    <TouchableOpacity>
                        <Image source={next} style={{width:33,height:33, tintColor:'#fff'}}/>
                    </TouchableOpacity>  
                    </View>
                    <TouchableOpacity>
                        <Image source={shuffle} style={{tintColor:'#fff'}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.secRow}>
                    <Text style={{color:'#fff'}}>0.25</Text>
                    <View style={styles.secMiniRow}>
                        <Image source={require('../assets/audioWave.png')} style={{width:120, height:30}}/>
                        <Image source={require('../assets/audioWave.png')} style={{width:120, height:30}}/>
                    </View>
                    <Text style={{color:'#fff'}}>0.25</Text>
                </View>
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
        height : '95%',
        width : '100%',
        backgroundColor: 'rgba(000,000,000,0.4)',
        padding:10,
        alignContent:'center',
        alignItems:'center',
        marginTop:60,
    },
    hdr:{
        width:'100%',
        height:'10%',
    },
    backIcon:{
        marginTop:15,
        height:30,
        width:30,
        tintColor:'#fff',
        alignContent:'flex-start',
        alignItems:'flex-start',
        opacity:0.9,
    },
    shortLine:{
        height:5,
        width:60,
        backgroundColor:'#fff',
        marginTop:-50,
        borderRadius:10,
        opacity:0.8,  
    },
    musicCard:{
        width:'80%',
        height:'33%',
        backgroundColor:'#fff',
        marginTop:40,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    musImage:{
        width:'100%',
        height:'100%',
    },
    insideCard:{
        width:'70%',
        height:'70%',
        backgroundColor:'#000',
        borderRadius:20,
    },
    insideImage:{
        width:'100%',
        height:'100%',
        borderRadius:40,
    },
    musicName:{
        marginTop:10,
        fontWeight:600,
        color:'#fff',
        fontSize:25,
    },
    musicSinger:{
        color:'#fff',

    },
    row:{
        marginTop:20,
        width:'100%',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-between',
    },
    miniRow:{
        width:'50%',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-around',
    },
    playButton:{
        width:70,
        height:70,
        backgroundColor:'#fff',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
    },
    secRow:{ 
        marginTop:30,
        width:'100%',
        gap:10,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'space-around',
    },
    secMiniRow:{
        width:'70%',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:5,
    }
})