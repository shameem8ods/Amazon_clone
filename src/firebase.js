
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "amzonclone-109ba.firebaseapp.com",
    projectId: "amzonclone-109ba",
    storageBucket: "amzonclone-109ba.appspot.com",
    messagingSenderId: "732992457502",
    appId: "1:732992457502:web:d3350d81d3084fc24ed70f",
    measurementId: "G-NRQJ6KJ5NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();