import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
// import Swipe from '../components/Swipe.js';
import LoginService from '../services/LoginService';

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

  render() {
    if (!LoginService.isLoggedIn()) {
      return LoginService.redirectLogin();
    }

    let student = this.state.student;
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
                  <rb.Form.Label>Name:</rb.Form.Label>
                  <rb.Form.Control placeholder={student.name} />
                </rb.Form.Group>
                <rb.Form.Group>
                  <rb.Form.Label>Email:</rb.Form.Label>
                  <rb.Form.Control type="email" placeholder={student.email} />
                </rb.Form.Group>
                {/* <rb.Form.Group>
                  <rb.Form.Label>Anonymity:</rb.Form.Label>
                  <rb.Form.Check type='switch' label='Anonymous - swipers will not see your name when you claim or advertise a swipe.'
                    defaultValue={student.anon} />
                </rb.Form.Group> */}
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