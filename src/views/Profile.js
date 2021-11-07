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
      student: {},
      ownedSwipes: null,
      claimedSwipes: null,
    }
  }

  async changePassword() {
    const passwordInput = document.getElementById('newpassword');
    const newPassword = passwordInput.value;
    console.log(newPassword);
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
      passwordInput.placeholder = 'Password changed successfully!';
    }).catch(() => {
      alert('Error changing password.');
    });
  }

  render() {
    if (!LoginService.isLoggedIn()) {
      return LoginService.redirectLogin();
    }

    // let student = this.state.student;
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
              <rb.Form>
                <rb.Form.Group>
                  <rb.Form.Label>Email:</rb.Form.Label>
                  <rb.Form.Control type="email" placeholder='<kerb>@mit.edu' disabled />
                </rb.Form.Group>
                <rb.Form.Group>
                  <rb.Form.Label>Change Password</rb.Form.Label>
                  <rb.Form.Control id='newpassword' type='password' placeholder='New Password' />
                </rb.Form.Group>
                <rb.Button onClick={() => this.changePassword()}>Submit New Password</rb.Button>
              </rb.Form>
            </div>
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