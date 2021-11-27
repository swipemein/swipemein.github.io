import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import SwipeNav from '../components/Nav.js';

import LoginService from '../services/LoginService.js';
// import { getURL } from '../Utils.js';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer.js';

class Login extends Component {

  async submitLogin() {
    let email = document.getElementById('login-email').value;
    let pw = document.getElementById('login-pw').value;

    await LoginService.logIn(email, pw);

    this.props.history.push('/dashboard');
  }

  async submitSignup() {
    let email = document.getElementById('signup-email').value;
    let pw = document.getElementById('signup-pw').value;

    await LoginService.createProfile(email, pw);

    this.props.history.push('/dashboard');
  }

  async submitResetPassword() {
    let email = document.getElementById('reset-pw-email').value;
    await LoginService.resetPassword(email);
  }

  render() {
    if (LoginService.isLoggedIn()) {
      return <Redirect to='/dashboard' />
    }
		return (
			<>
				<SwipeNav />
				<div className='container'>
					<h1 className='pagetitle'>Login</h1>
				</div>

        <div className='container'>
          <h5>Log in</h5>
          <div className='loginform'>
            <rb.Form>
              <rb.Form.Group>
                <rb.Form.Label>Email:</rb.Form.Label>
                <rb.Form.Control id='login-email' placeholder="<kerb>@mit.edu" type='email' />
              </rb.Form.Group>
              <rb.Form.Group>
                <rb.Form.Label>Password:</rb.Form.Label>
                <rb.Form.Control id='login-pw' placeholder='Password' type='password' />
              </rb.Form.Group>
              <rb.Button onClick={() => this.submitLogin()}>Log In</rb.Button>
            </rb.Form>
          </div>

          <br/>
          
          <h5>Sign Up</h5>
          <div className='loginform'>
            <rb.Form>
              <rb.Form.Group>
                <rb.Form.Label>Email:</rb.Form.Label>
                <rb.Form.Control id='signup-email' placeholder="<kerb>@mit.edu" type='email' />
              </rb.Form.Group>
              <rb.Form.Group>
                <rb.Form.Label>Password: (must be at least 8 characters long)</rb.Form.Label>
                <rb.Form.Control id='signup-pw' placeholder='Password' type='password' />
              </rb.Form.Group>
              <rb.Button onClick={() => this.submitSignup()}>Sign Up</rb.Button>
            </rb.Form>
          </div>

          <br/>
          
          <h5>Reset Password</h5>
          <div className='loginform'>
            <rb.Form>
              <rb.Form.Group>
                <rb.Form.Label>Email:</rb.Form.Label>
                <rb.Form.Control id='reset-pw-email' placeholder="<kerb>@mit.edu" type='email' />
              </rb.Form.Group>
              <rb.Button onClick={() => this.submitResetPassword()}>Reset Password</rb.Button>
            </rb.Form>
          </div>
        </div>
        <Footer />
			</>
		);
	}

}

export default withRouter(Login);