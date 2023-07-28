import React,{useState,useEffect,useCallback} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Footer } from '../Components/Footer';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import db from '../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";

SplashScreen.preventAutoHideAsync();


const menu = require('../assets/icons/menu.png');
const search = require('../assets/icons/search.png');
const musicImage = require('../assets/musicImage.jpg');
const musicIcon = require('../assets/icons/music.png');
const like = require('../assets/icons/like.png');
const play = require('../assets/icons/play.png');
const user = require('../assets/icons/user.png');

export function Main({navigation}) {

    const screen="Main";

    const [musicData,setMusicData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db,'musics'), (snapshot) => {
            setMusicData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
    },[]);

    const handleMusicPress = (musicId) => {
        navigation.navigate('Song',{musicId});
    }

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

    const deviceH = Dimensions.get("screen").height;
    const deviceW = Dimensions.get("screen").width;

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
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style='light' />
            <View style = {styles.subCont}>
                {/* search header start*/}
                    <View style={styles.srchHeader}>
                        <View style = {[styles.hdrItems, {width:'12%'}]}>
                            <Image source={menu} style ={[styles.imgIcons, {padding:10,transform:[{rotate:'180deg'}]}]}/>
                        </View>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <View style = {[styles.hdrItems, {width:'170%',gap:80,}]}>
                            <Image source={search} style ={styles.imgIcons}/>
                            <Text style={styles.srchText}>
                                Search
                            </Text>
                        </View>
                </TouchableOpacity>
                    </View>
                {/* search header end */}
    
                {/* heading text start */}
                <Text style={styles.hdText}>
                    Trending right now...
                </Text>
                {/* heading text end */}
                
                    {/* trending cards start */}
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginTop: 10,
                        marginBottom: 15,
                    }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: 15, height: '100%', padding: 10, }}>

                            {
                                musicData.map((music) =>(
                                    <View style={styles.card}>
                                    <Image source={{uri:music.coverImg}} style={styles.cardImg} />
                                    <TouchableOpacity style={styles.dotIcon}>
                                        <Text style={styles.dotFont}>...</Text>
                                    </TouchableOpacity>
                                    <View style={styles.playBox}>
                                        <View style={styles.playBoxItem}>
                                            <View key={music.id}>
                                                <Text style={styles.musicName}>
                                                    {music.music}
                                                </Text>
                                                <View style={styles.musicDescBox}>
                                                    <Image source={musicIcon} style={styles.musicIcon} />
                                                    <Text style={styles.musicDesc}>
                                                        {music.singer}
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity style={styles.playBtn}>
                                                <Image source={play} style={styles.playIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    </View>
                                ))
                            }                                

                            {/* <View style={styles.card}>
                                <Image source={musicImage} style={styles.cardImg} />
                                <TouchableOpacity style={styles.dotIcon}>
                                    <Text style={styles.dotFont}>...</Text>
                                </TouchableOpacity>
                                <View style={styles.playBox}>
                                    <View style={styles.playBoxItem}>
                                        <View>
                                            <Text style={styles.musicName}>
                                                The Dark Side
                                            </Text>
                                            <View style={styles.musicDescBox}>
                                                <Image source={music} style={styles.musicIcon} />
                                                <Text style={styles.musicDesc}>
                                                    Muse - Simulation Theory
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styles.playBtn}>
                                            <Image source={play} style={styles.playIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image source={musicImage} style={styles.cardImg} />
                                <TouchableOpacity style={styles.dotIcon}>
                                    <Text style={styles.dotFont}>...</Text>
                                </TouchableOpacity>
                                <View style={styles.playBox}>
                                    <View style={styles.playBoxItem}>
                                        <View>
                                            <Text style={styles.musicName}>
                                                The Dark Side
                                            </Text>
                                            <View style={styles.musicDescBox}>
                                                <Image source={music} style={styles.musicIcon} />
                                                <Text style={styles.musicDesc}>
                                                    Muse - Simulation Theory
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styles.playBtn}>
                                            <Image source={play} style={styles.playIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> */}

                        </ScrollView>
                    </View>


                    {/* trending cards end */}
                {/* <Text style={{fontSize:50,marginLeft:15,color:'#fff',fontWeight:'600',opacity:0.7,bottom:50}}>{number}</Text>
                {showData &&
                <Text style={{fontSize:50,marginLeft:15,color:'#fff',fontWeight:'600',opacity:0.7,bottom:80}}>This is hidden</Text>
                }
                <TouchableOpacity onPress={() => handleClick()}>
                    <Text style={{marginLeft:20,bottom:80,}}>Incs Number</Text>
                </TouchableOpacity> */}

                {/* trending text boxes */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={{ flexDirection: 'row', gap: 10, height: '100%', padding: 10, }}>
                    <TouchableOpacity style={styles.textCard}>
                        <Text style={styles.trendText}>Trending right now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textCard}>
                        <Text style={styles.trendText}>Rock</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textCard}>
                        <Text style={styles.trendText}>Hip-Hop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textCard}>
                        <Text style={styles.trendText}>Electro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textCard}>
                        <Text style={styles.trendText}>Traditional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textCard}>
                        <Text style={styles.trendText}>Romantic</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* music card */}
                <ScrollView>
                    {
                        musicData.map((music) => (

                            <TouchableOpacity  key={music.id} onPress={() => handleMusicPress(music.id)}>
                                <View style={styles.musicCard}>
                                        <Image source={{uri:music.coverImg}} style={styles.imgCard}/>
                                        <View style={styles.musicDesBox}>
                                            <Text style={styles.musicNme}>{music.music}</Text>
                                            <View style={styles.desc}>
                                                    <Image source={user} style={styles.userImg}/>
                                                <Text style={{fontSize:12,color:'#fff'}}>
                                                    {music.singer}
                                                </Text>
                                            </View>
                                        </View>
                                <TouchableOpacity>
                                    <Image source={like} style={styles.likeBtn}/>
                                </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))
                    }

                    {/* <View style={styles.musicCard}>
                            <Image source={musicImage} style={styles.imgCard}/>
                            <View style={styles.musicDesBox}>
                                <Text style={styles.musicNme}>I'm Good(Blue)</Text>
                                <View style={styles.desc}>
                                        <Image source={user} style={styles.userImg}/>
                                    <Text style={{fontSize:10}}>
                                        Alan Walker
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={like} style={styles.likeBtn}/>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.musicCard}>
                            <Image source={musicImage} style={styles.imgCard}/>
                            <View style={styles.musicDesBox}>
                                <Text style={styles.musicNme}>I'm Good(Blue)</Text>
                                <View style={styles.desc}>
                                        <Image source={user} style={styles.userImg}/>
                                    <Text style={{fontSize:10}}>
                                        Alan Walker
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={like} style={styles.likeBtn}/>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.musicCard}>
                            <Image source={musicImage} style={styles.imgCard}/>
                            <View style={styles.musicDesBox}>
                                <Text style={styles.musicNme}>I'm Good(Blue)</Text>
                                <View style={styles.desc}>
                                        <Image source={user} style={styles.userImg}/>
                                    <Text style={{fontSize:10}}>
                                        Alan Walker
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={like} style={styles.likeBtn}/>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.musicCard}>
                            <Image source={musicImage} style={styles.imgCard}/>
                            <View style={styles.musicDesBox}>
                                <Text style={styles.musicNme}>I'm Good(Blue)</Text>
                                <View style={styles.desc}>
                                        <Image source={user} style={styles.userImg}/>
                                    <Text style={{fontSize:10}}>
                                        Alan Walker
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={like} style={styles.likeBtn}/>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.musicCard}>
                            <Image source={musicImage} style={styles.imgCard}/>
                            <View style={styles.musicDesBox}>
                                <Text style={styles.musicNme}>I'm Good(Blue)</Text>
                                <View style={styles.desc}>
                                        <Image source={user} style={styles.userImg}/>
                                    <Text style={{fontSize:10}}>
                                        Alan Walker
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={like} style={styles.likeBtn}/>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.musicCard}>
                            <Image source={musicImage} style={styles.imgCard}/>
                            <View style={styles.musicDesBox}>
                                <Text style={styles.musicNme}>I'm Good(Blue)</Text>
                                <View style={styles.desc}>
                                        <Image source={user} style={styles.userImg}/>
                                    <Text style={{fontSize:10}}>
                                        Alan Walker
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={like} style={styles.likeBtn}/>
                            </TouchableOpacity>
                    </View> */}

                </ScrollView>
            </ScrollView>
            </View>
            <Footer navigation={navigation} screen={screen} />
        </View>
);
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
        fontFamily:'Raleway-Bold',
    }, 
    card: {
        width: 280,
        borderRadius: 30,
        height: 200,
        elevation: 10,
        shadowColor: '#fff',
        shadowRadius: 30,
    },
    cardImg: {
        width: '100%',
        height: 200,
        borderRadius: 30,
        resizeMode: 'contain',
    },
    dotIcon: {
        position: 'absolute',
        right: 30,
    },
    dotFont: {
        color: '#fff',
        fontSize: 29,
        fontWeight: '600',
    },
    playBox: {
        position: 'absolute',
        zIndex: 999,
        bottom: 0,
        padding: 20,
        width: '100%',
        borderRadius: 30,
    },
    playBoxItem: {
        backgroundColor: 'rgba(42, 82, 190, 0.9)',
        height: 70,
        width: '100%',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    musicName: {
        left:30,
        top:5,
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    musicDesc: {
        color: '#fff',
        fontSize: 12,
    },
    musicDescBox: {
        width:'72%',
        flexDirection: 'row',
        marginTop: 5,
        marginRight:15,
        gap: 5,
    },
    musicIcon: {
        tintColor: '#fff',
        height: 25,
        width: 25,
    },
    playBtn: {
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 9,
    },
    playIcon: {
        height: '100%',
        width: '100%',
    },
    textCard:{
        backgroundColor: 'rgba(42, 82, 190, 0.9)',
        padding:5,
        borderRadius:5,
    },
    trendText:{
        color:'#fff',
        marginLeft:5,
        marginRight:5,
    },
    musicCard:{
        top:10,
        flexDirection:'row',
        width:'100%',
        height:70,
        justifyContent:'space-between',
    },
    imgCard:{
        width:60,
        height:60,
        resizeMode:'contain',
        marginLeft:8,
        borderRadius:50,
        //transform:5,

    },
    musicDesBox:{
        width:'60%',
        marginLeft:19,
    },
    desc:{
        flexDirection:'row',
    },
    musicNme:{
        color:'#fff',
        fontWeight:600,
        fontSize:20,
    },
    userImg:{
        width:12,
        height:12,
        tintColor:'#fff',
        top:2,
    },
    likeBtn:{
        tintColor:'#fff',
        top:5,
        right:5,
        width:30,
        height:30,
    }
    
})
