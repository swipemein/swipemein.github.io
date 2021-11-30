import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
// import Swipe from '../components/Swipe.js';
import LoginService from '../services/LoginService';

import { getURL, sortBySwipeTime } from '../Utils.js';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swipe from '../components/Swipe.js';
import Footer from '../components/Footer.js';

export default class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      socialPreference: '',
      passwordButtonText: 'Submit New Password',
      profileButtonText: 'Submit Profile Changes',
      sendVerificationEmail: 'Send Verification Email',
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

  async getUserOwnedSwipes() {
    this.setState({
      ownedSwipes: null,
    });
    fetch(
      getURL() + '/userOwnedSwipes',
			{
        method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(
      r => r.json()
    ).then(data => {
			let swipeDatas = sortBySwipeTime(Object.values(data));
			let swipes = swipeDatas.map(
				swipeData => <Swipe swipe={swipeData} key={swipeData.id} />
			);
			this.setState({
				ownedSwipes: swipes,
			});
    }).catch(r => {
      alert("Error getting user owned swipes. Status code: " + r.status);
    });
  }

  async getUserClaimedSwipes() {
    this.setState({
      claimedSwipes: null,
    });
    fetch(
      getURL() + '/userClaimedSwipes',
			{
        method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(
      r => r.json()
    ).then(data => {
			let swipeDatas = sortBySwipeTime(Object.values(data));
			let swipes = swipeDatas.map(
				swipeData => <Swipe swipe={swipeData} key={swipeData.id} />
			);
			this.setState({
				claimedSwipes: swipes,
			});
    }).catch(r => {
      alert("Error getting user claimed swipes. Status code: " + r.status);
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
        emailVerified: userData.emailVerified,
      });
    });
    this.getUserOwnedSwipes();
    this.getUserClaimedSwipes();
  }

  render() {
    if (!LoginService.isLoggedIn()) {
      return LoginService.redirectLogin();
    }
    
    const ownedSwipes = this.state.ownedSwipes;
    const claimedSwipes = this.state.claimedSwipes;

    let emailVerificationText = "Loading...";

    if (this.state.emailVerified === true) {
      emailVerificationText = "Verified";
    } else if (this.state.emailVerified === false) {
      emailVerificationText = "Unverified";
    }

    if (ownedSwipes) ownedSwipes.reverse();
    if (claimedSwipes) claimedSwipes.reverse();
    return (
      <div>
        <SwipeNav />
        <div className='container'>
          <h1 className="pagetitle">Profile</h1>
        </div>
        <div className='container'>
          <div className='container'>
            <h5>Account status</h5>
            <div className='container'>
              {emailVerificationText}
              <br />
              {this.state.emailVerified === false ? <rb.Button onClick={() => LoginService.sendVerificationEmail()}>{this.state.sendVerificationEmail}</rb.Button> : null }
            </div>
            <br/>
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
                <rb.Form.Label>Social Preferences (e.g. "let's eat together", "I prefer to eat alone"):</rb.Form.Label>
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
            <div className='container row noPush' id='profilefooter'>

              <div className='col noPush'>
                <h5>Swipes you own:</h5>
                <div className='container'>
                  {ownedSwipes === null ? "loading" : (ownedSwipes.length === 0 ? "None" : ownedSwipes)}
                </div>
              </div>

              <div className='col noPush'>
                <h5>Swipes you've claimed:</h5>
                <div className='container'>
                  {claimedSwipes === null ? "loading" : (claimedSwipes.length === 0 ? "None" : claimedSwipes)}
                </div>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}