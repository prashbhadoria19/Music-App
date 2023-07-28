import React,{useCallback,useState,useEffect} from "react";
import { Text,StyleSheet, View, TouchableOpacity, TextInput, Image, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Footer} from '../Components/Footer';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import db from '../firebaseConfig';
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import {getStorage,ref,uploadBytes,uploadBytesResumable,getDownloadURL} from 'firebase/storage';

SplashScreen.preventAutoHideAsync();

export function Profile({navigation}){

    const screen="Profile";

    const [keyVisible,setKeyVisible] = useState(false);

    const [musicName,setMusicName] = useState('');
    const [singerName,setSingerName] = useState('');
    const [musicCoverImg,setMusicCoverImg] = useState('');
    const [musicAudioFile,setMusicAudioFile] = useState('');


    const [savingData,setSavingData] = useState(false);
    const [showAlert,setShowAlert] = useState();
    const [alertMsg,setAlertMsg] = useState('New Music added successfull !!');

    const addNewMusic = () => {
        setSavingData(true);
        if(musicName ==='' || musicName === null || singerName ==='' || singerName === null || musicCoverImg ==='' || musicAudioFile ===''){
            setAlertMsg('All field is required');
            setShowAlert(true);
            return;
        }else{
            addDoc(collection(db,'musics'),{
                music: musicName,
                singer: singerName,
                coverImg: musicCoverImg,
                musicFile: musicAudioFile,
            }).then(() =>{
                setAlertMsg('New Music Added Succcessfully!!')
                setShowAlert(true);
                setMusicName('');
                setSingerName('');
                setMusicCoverImg('');
                setMusicAudioFile('');
                setSavingData(false);
                //console.log('data saved');
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const [selectedImg,setSelectedImg] = useState(null);
    const [selectedImgUri,setSelectedImgUri] = useState(null);

    const handleImageSelect = async () => {

       const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

       if(status !== 'granted'){
        console.log('Access denied');
        return;
       }

       const result = await ImagePicker.launchImageLibraryAsync();
       
       if(!result.canceled){
        setSelectedImg(result);
        setSelectedImgUri(result.assets[0].uri);
        console.log(selectedImg);
       }
    }

    const [selectDoc,setSelectDoc] = useState(null);
    const [selectDocUri,setSelectDocUri] = useState(null);

    const handleDocSelection = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setSelectDoc(result);
        setSelectDocUri(result.uri);
    }

    const uploadImage = async () => {
         
        if(selectedImg == null) return;

        //convert image

        const blobImage = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
                resolve(xhr.response);
            }
            xhr.onerror = function(){
                reject(new TypeError('Network Request Failed'));
            }
            xhr.responseType = 'blob';
            xhr.open("GET", selectedImgUri,true);
            xhr.send(null)
        })

        const storage = getStorage();
        
        //Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType : 'image/png'
        };

        const storageRef = ref(storage,'musicImage/' + Date.now());
        const uploadTask = uploadBytesResumable(storageRef,blobImage,metadata);

        //Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot)=>{
            //Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state){
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
        
              // ...
        
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              setMusicCoverImg(downloadURL);
            });
          }
        );
    }

    const uploadMusic = async () => {
         
        if(selectDoc == null) return;

        //convert image

        const blobFile = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
                resolve(xhr.response);
            }
            xhr.onerror = function(){
                reject(new TypeError('Network Request Failed'));
            }
            xhr.responseType = 'blob';
            xhr.open("GET", selectDocUri,true);
            xhr.send(null)
        })

        const storage = getStorage();
        
        //Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType : 'audio/mp3'
        };

        const storageRef = ref(storage,'mp3Files/' + Date.now());
        const uploadTask = uploadBytesResumable(storageRef,blobFile,metadata);

        //Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot)=>{
            //Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state){
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
        
              // ...
        
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              setMusicAudioFile(downloadURL);
            });
          }
        );
    }

    // useEffect(() =>{
    //     console.log(musicName);
    // },[musicName])

    // useEffect(() => {
    //     onSnapshot(collection(database,'musics'), (snapshot) => {
    //         setMusicData(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    //     })
    // },[]);

   //console.log("Data Fetched", musicData);

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
                <View style={styles.body}>
                    <Text style={styles.hdText}>
                        Data from database
                    </Text>

                    {/* {
                        musicData.map((items)=>(
                            <View key={items.id} style={{flexDirection:'row',gap:10,}}>
                                <Text style={styles.text}>{items.name}</Text>
                                <Text style={styles.text}>{items.singer}</Text>
                            </View>
                        ))
                    } */}

                    <TextInput placeholder="Music Name" style={styles.inputField} value={musicName} onFocus={() => setKeyVisible(false)} onChangeText={(text) => setMusicName(text)} />
                    <TextInput placeholder="Singer Name" style={styles.inputField} value={singerName} onFocus={() => setKeyVisible(false)} onChangeText={(text) => setSingerName(text)}/>
                    {
                        showAlert &&
                        <TouchableOpacity onPress={() => setShowAlert(false)}>
                            <Text style={{fontSize:10}}>{alertMsg}</Text>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity onPress={handleImageSelect}>
                        <Text style={{color:'#fff',backgroundColor:'#000'}}>Select Image</Text>
                    </TouchableOpacity>

                    {
                        selectedImg && <Image source={{ uri: selectedImgUri }} style={{ width: 200, height: 200 }} />
                    }

                    <TouchableOpacity onPress={handleDocSelection}>
                        <Text style={{color:'#fff',backgroundColor:'#000'}}>Select MP3 File</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={uploadImage}>
                        <Text style={{color:'#fff',backgroundColor:'#000'}}>Upload Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={uploadMusic}>
                        <Text style={{color:'#fff',backgroundColor:'#000'}}>Upload Music</Text>
                    </TouchableOpacity>
                    <View style={{width:'100%',alignContent:'center',alignItems:'center',justifyContent:'center'}}> 
                        <TouchableOpacity onPress={addNewMusic}>
                            <Text style={{color:'#fff',fontSize:20}}>{'Save Data'}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <StatusBar style="auto"/>
            </View>
            {
                keyVisible == true ?
                <Footer navigation={navigation} screen={screen}/>
                :
                <></>
            }
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
        gap:20,

    },
    body:{
        marginLeft:10,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        gap:10,
    },
    hdText:{
        paddingTop:50,
        fontSize:25,
        color:'#fff',
    },
    text:{
        fontSize:10,
        color:'#fff',
    },
    inputField:{
        padding:5,
        borderRadius:10,
        width:'95%',
        backgroundColor:'#fff',
    }

})