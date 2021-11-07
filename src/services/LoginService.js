import React from 'react';
import {Redirect} from 'react-router-dom';
import { getURL } from '../Utils';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

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
initializeApp(firebaseConfig);
const auth = getAuth();

class LoginService {

  static async createProfile(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const token = userCredential._tokenResponse.idToken;
        LoginService.storeToken(token);
        fetch(
          getURL() + '/addUser',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': LoginService.getToken()
            },
          }
        ).catch(error => {
          alert('Error inserting into database.');
        });
      })
      .catch((error) => {
        alert('Error creating user.');
      });
  }

  static async logIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const token = userCredential._tokenResponse.idToken;
      LoginService.storeToken(token);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  static logOut() {
    signOut(auth).then(() => {
      LoginService.removeToken();
    }).catch(error => {
      console.log('error signing out');
    });
  }

  static isLoggedIn() {
    return LoginService.getToken() !== undefined && LoginService.getToken() !== null;
  }

  static storeToken(token) {
    localStorage.setItem('idToken', token);
  }

  static removeToken() {
    localStorage.removeItem('idToken');
  }

  static getToken() {
    return localStorage.getItem('idToken');
  }

  static redirectLogin() {
    return <Redirect to='/login' exact={true} />
  }
}

export default LoginService;