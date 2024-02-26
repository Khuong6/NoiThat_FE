// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwmykeqn970TLOsIDSLT2oVtfgBYFZaQs",
  authDomain: "noithat-dc80e.firebaseapp.com",
  projectId: "noithat-dc80e",
  storageBucket: "noithat-dc80e.appspot.com",
  messagingSenderId: "540332386746",
  appId: "1:540332386746:web:a07fa94e434fb047975583",
  measurementId: "G-7FKT30EGE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {storage}