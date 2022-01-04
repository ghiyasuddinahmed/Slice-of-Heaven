// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbwKlID0dSmOFS9_CXEgnswzOllTzr6Xc",
  authDomain: "slice-of-heaven-39cc8.firebaseapp.com",
  projectId: "slice-of-heaven-39cc8",
  storageBucket: "slice-of-heaven-39cc8.appspot.com",
  messagingSenderId: "10868561088",
  appId: "1:10868561088:web:b4392f643ea00ffab9c925",
  measurementId: "G-NK349YWVWM",
};

// Initialize Firebase
let app;
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth(app);

export { auth };
