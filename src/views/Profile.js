import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
// import Swipe from '../components/Swipe.js';
import LoginService from '../services/LoginService';

import { getURL } from '../Utils.js';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      socialPreference: '',
      passwordButtonText: 'Submit New Password',
      profileButtonText: 'Submit Profile Changes',
      ownedSwipes: null,
      claimedSwipes: null,
    }
  }

  async updateProfile() {
    const newName = document.getElementById('nameinput').value;
    const newSocialPreference = document.getElementById('socialpreferenceinput').value;
    fetch(
      getURL() + '/updateUser',
      {        
        method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				},
        body: JSON.stringify({
          firstName: newName,
          socialPreference: newSocialPreference,
        })
      }
    ).then(() => {
      this.setState({
        profileButtonText: 'Profile Change Successful!'
      })
    }).catch(error => {
      alert('Error changing profile.');
    })
  }

  async changePassword() {
    const passwordInput = document.getElementById('newpassword');
    const newPassword = passwordInput.value;
    fetch(
      getURL() + '/changePassword',
			{
        method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				},
        body: JSON.stringify({
          newPassword: newPassword,
        })
			}
    ).then(() => {
      passwordInput.value = '';
      this.setState({
        passwordButtonText: 'Password Change Successful!'
      })
    }).catch(() => {
      alert('Error changing password.');
    });
  }

  componentDidMount() {
    fetch(
      getURL() + '/getUser',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': LoginService.getToken()
        },
      }
    ).then(r => r.json()).then(r => {
      const userData = r.userData;
      this.setState({
        name: userData.firstName,
        email: userData.email,
        socialPreference: userData.socialPreference,
      });
    })
  }

  render() {
    if (!LoginService.isLoggedIn()) {
      return LoginService.redirectLogin();
    }

    return (
      <div>
        <SwipeNav />
        <div className='container'>
          <h1 className="pagetitle">Profile</h1>
        </div>
        <div className='container'>
          <div className='container'>
            <h5>Info</h5>
            <div className='container'>
              <rb.Form.Group>
                <rb.Form.Label>Name:</rb.Form.Label>
                <rb.Form.Control id='nameinput' type="text" defaultValue={this.state.name} />
              </rb.Form.Group>
  
              <rb.Form.Group>
                <rb.Form.Label>Email:</rb.Form.Label>
                <rb.Form.Control type="email" placeholder={this.state.email} disabled />
              </rb.Form.Group>
              
              <rb.Form.Group>
                <rb.Form.Label>Social Preferences:</rb.Form.Label>
                <rb.Form.Control id='socialpreferenceinput' type="text" defaultValue={this.state.socialPreference} />
              </rb.Form.Group>
              <rb.Button onClick={() => this.updateProfile()}>{this.state.profileButtonText}</rb.Button>
            </div>
            <br/>
            <h5>Change Password</h5>
            <div className='container'>
              <rb.Form.Group>
                <rb.Form.Control id='newpassword' type='password' placeholder='New Password' />
              </rb.Form.Group>
              <rb.Button onClick={() => this.changePassword()}>{this.state.passwordButtonText}</rb.Button>
            </div>
            <br/>
            <div className='container row' id='profilefooter'>

              <div className='col-xs-4'>
                <h5>Your swipes</h5>
                <div className='container'>
                  {this.state.ownedSwipes ?? 'None'}
                </div>
              </div>

              <div className='col-xs-4'>
                <h5>Swipes you've claimed</h5>
                <div className='container'>
                  {this.state.claimedSwipes ?? 'None'}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}