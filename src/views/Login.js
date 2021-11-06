import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {

  submitLogin() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-pw').value;
  }

  submitSignup() {
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-pw').value;
  }

  render() {
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
                <rb.Form.Label>Password:</rb.Form.Label>
                <rb.Form.Control id='signup-pw' placeholder='Password' type='password' />
              </rb.Form.Group>
              <rb.Button onClick={() => this.submitLogin()}>Sign Up</rb.Button>
            </rb.Form>
          </div>
        </div>
			</>
		);
	}

}