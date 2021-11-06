import React from 'react';
import {Redirect} from 'react-router-dom';
// import { getURL } from '../Utils';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAVAezS1NPeLwvjW_Ldx3NYbSsWzdTGPg",
  authDomain: "swipemein-storage.firebaseapp.com",
  projectId: "swipemein-storage",
  storageBucket: "swipemein-storage.appspot.com",
  messagingSenderId: "810938213396",
  appId: "1:810938213396:web:44f1aff1b0f0b3a3553301",
  measurementId: "G-E7QJK7RDFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

class LoginService {

  static createProfile(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  static logOut() {
    localStorage.removeItem(process.env.REACT_APP_SUB_ID);
  }

  static isLoggedIn() {
    return true;
    return localStorage.getItem(process.env.REACT_APP_SUB_ID) !== null;
  }

  static redirectLogin() {
    return <Redirect to='/login' exact={true} />
  }
}

export default LoginService;