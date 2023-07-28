// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxYqZWcRhgsknrYz5f9DaWdnnrNJiejfI",
  authDomain: "music-app-dd464.firebaseapp.com",
  databaseURL: "https://music-app-dd464-default-rtdb.firebaseio.com",
  projectId: "music-app-dd464",
  storageBucket: "music-app-dd464.appspot.com",
  messagingSenderId: "741451366010",
  appId: "1:741451366010:web:160ef4eb182d32c482c5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();