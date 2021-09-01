import React from 'react';
import {Redirect} from 'react-router-dom';
import { getURL } from '../Utils';

class LoginService {
  static clientID = "8fbfe55e-51b6-40df-a8e2-0a38690e2a9f";
  static responseType = "code";
  static scope = "openid profile email";
  // static redirectURI = "https://swipemein.github.io/";
  static redirectURI = getURL() + "/token";

  // Get url to redirect to OIDC to authenticate
  static getRedirectUrl() {
    let url = "https://oidc.mit.edu/authorize?response_type=code";
    
    let params = [
      ["client_id", this.clientID],
      // ["response_type", this.responseType],
      ["redirect_uri", this.redirectURI],
      ["scope", this.scope],
    ];

    params.forEach(param => {
      let label = param[0], value = param[1];
      url += "&" + label + "=" + value;
    });
    return url;
  }

  // Log in with code returned from OIDC
  static login(code) {
    console.log(code);
  }
  
  static requestToken(code) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => this.receiveToken(xhr);
  
    xhr.open("POST", "https://oidc.mit.edu/token");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = "json";
  
    let body = "grant_type=authorization_code";
    body += "&code=" + code;
    body += "&redirect_uri=https://swipemein.github.io/";
    body += "&client_id=8fbfe55e-51b6-40df-a8e2-0a38690e2a9f";
    body += "&client_secret=D1vTFSOtY8zdbsiliGbDWf8tJCMtJ7IWPkLyROnp4yxhgpQWqeBRQWGRjj6NEFl_M4dt5k9dvgAA8k4v2poWxQ";
  
    xhr.send(body);
  }

  static receiveToken(xhrResponse) {
    if (xhrResponse.readyState === XMLHttpRequest.DONE) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => this.getUserInfo(xhr);

      xhr.open("GET", "https://oidc.mit.edu/userinfo");
      xhr.setRequestHeader("Authorization", "Bearer " + xhrResponse.response["access_token"]);
      xhr.responseType = "json";

      xhr.send();
    }
  }

  static getUserInfo(xhrResponse) {
    if (xhrResponse.readyState === XMLHttpRequest.DONE) {
      let resp = xhrResponse.response;
      // let db = fb.firestore();
      // let userDocRef = db.collection('users').doc(resp['sub']);
      localStorage.setItem(process.env.REACT_APP_SUB_ID, resp['sub']);

      // userDocRef.get().then((doc) => {
      //   if (!doc.exists) {
      //     console.log(resp);
      //     console.log('does not exist');
      //     doc.set({
      //       email: resp['email'],
      //       name: resp['name'],
      //       anon: false,
      //       reputation: 1
      //       // swipes listed (empty)
      //       // swipes claimed (empty)
      //     });
      //   }
      // });
      window.location.reload();
    }
  }

  static logOut() {
    localStorage.removeItem(process.env.REACT_APP_SUB_ID);
  }

  static isLoggedIn() {
    return localStorage.getItem(process.env.REACT_APP_SUB_ID) !== null;
  }

  static redirectLogin() {
    return <Redirect to='/login' exact={true} />
  }
}

export default LoginService;