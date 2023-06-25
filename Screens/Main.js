import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Footer } from '../Components/Footer';


const menu = require('../assets/icons/menu.png');
const search = require('../assets/icons/search.png');
const musicImage = require('../assets/musicImage.jpg');
const music = require('../assets/icons/music.png');
const like = require('../assets/icons/like.png');
const play = require('../assets/icons/play.png');

export function Main({navigation}) {

    // const deviceH = Dimensions.get("screen").height;
    // const deviceW = Dimensions.get("screen").width;

    //const currentUser = ('Prashant')
    // const [number, incsNumber] = useState(0);
    // const [showData,setShowData] = useState(false);

    // const handleClick = () => {
    //     incsNumber(number + 1);
    // }

    // useEffect(()=>{
    //     setShowData(!showData);
    // },[number])

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style = {styles.subCont}>
                {/* search header start*/}
                <View style={styles.srchHeader}>
                    <View style = {[styles.hdrItems, {width:'15%'}]}>
                        <Image source={menu} style ={[styles.imgIcons, {padding:10,transform:[{rotate:'180deg'}]}]}/>
                    </View>
                    <View style = {[styles.hdrItems, {width:'80%',gap:80,}]}>
                        <Image source={search} style ={styles.imgIcons}/>
                        <Text style={styles.srchText}>
                            Search
                        </Text>
                    </View>
                </View>
                {/* search header end */}
    
                {/* heading text start */}
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                <Text style={styles.hdText}>
                    Trending right now...
                </Text>
                {/* heading text end */}
                {/* trending cards start */}
    <View style={{
                        marginTop: 10,
                        marginBottom: 15,
                    }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 15, height: '100%', padding: 10, }}>
                    <View style={styles.card}>
                        <Image source={musicImage} style={styles.cardImg}/>
                        <TouchableOpacity style={styles.dotIcon}>
                            <Text style={styles.dotFont}>
                                ...
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.playBox}>
                            <View style={styles.playBoxItem}>
                                <View>
                                    <Text style={styles.musicName}>
                                        The Dark Side
                                    </Text>
                                    <View style={styles.musicDescBox}>
                                        <Image source={music} style={styles.musicIcon}/>
                                        <Text style={styles.musicDesc}>
                                            Muse - Simulation Theory
                                        </Text>
                                        <View style={styles.playIcon}>
                                            <TouchableOpacity style={styles.playButton}>
                                                <Image source={play} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
</View>
                </ScrollView>

                {/* trending cards end */}
                {/* <Text style={{fontSize:50,marginLeft:15,color:'#fff',fontWeight:'600',opacity:0.7,bottom:50}}>{number}</Text>
                {showData &&
                <Text style={{fontSize:50,marginLeft:15,color:'#fff',fontWeight:'600',opacity:0.7,bottom:80}}>This is hidden</Text>
                }
                <TouchableOpacity onPress={() => handleClick()}>
                    <Text style={{marginLeft:20,bottom:80,}}>Incs Number</Text>
                </TouchableOpacity> */}
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f7eae',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subCont:{
        height : '100%',
        width : '100%',
        backgroundColor: 'rgba(000,000,000,0.4)',
        gap:10,

    },
    srchHeader:{
        height : 70,
        width:'100%',
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
        flexDirection:'row',
        padding:5,
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 10,
    },
    srchText: {
        fontSize: 16,
        color: '#fefefe',
        opacity: 0.5,
    },
    hdText:{
        marginLeft:10,
        fontSize:30,
        opacity:0.6,
        color:'#ffff',
        fontWeight:600,
    }, 
    card:{
        marginLeft:10,
        width:'60%',
        height:160,
    },
    cardImg:{
        width:'100%',
        height:'100%',
        opacity:0.7,
        borderRadius:20,
        resizeMode:'contain',

    },
    dotIcon:{
        position:'absolute',
        right:20,
        top:-5,
    },
    dotFont:{
        color:'#ffff',
        fontSize:29,
        fontWeight:'600',
    },
    playBox:{
        flexDirection:'row',
        marginLeft:15,
        backgroundColor: 'blue',
        position:'absolute',
        zIndex:999,
        padding:5,
        width:'85%',
        bottom:20,
        borderRadius:15,
    },
    playBoxItem:{
        height:60,
        width:'100%',
        padding:10,
        borderRadius: 20,
    },
    musicName:{
        color:'#fff',
        fontSize:16,
        fontWeight:600,
    },
    musicDesc:{
        color:'#fff',
        fontSize:10,
    },
    musicDescBox:{
        width:'60%',
        height:30,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center'
    },
    musicIcon:{
        tintColor:'#fff',
        height:18,
        width:18,
        
    },
    playIcon:{
        left:15,
        bottom:15,
        backgroundColor:'#fff',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        height:35,
        width:35,
        borderRadius:20,
    },
    playButton:{
        left:2,
        height:'90%',
        width:'90%',
    }
})
