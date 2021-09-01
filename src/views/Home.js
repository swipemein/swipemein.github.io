import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
import LoginService from '../services/LoginService';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    // Login info
    let url = window.location.href;
    if (url.includes("code") && localStorage.getItem(process.env.REACT_APP_SUB_ID) === null) {
      let suffix = url.split("?")[1];
      let assignment = suffix.split("#")[0];
      let code = assignment.split("=")[1];
      LoginService.login(code);
    }
  }

  render() {
    return (
      <div>
        <SwipeNav />
        <div className='container-fluid homephotos'>

          <div className='hometitle container'>
            <h2>SwipeMeIn</h2>
          </div>
          <div className='homeinfo container-fluid'>
            <div className='col-xs-4 homedescription'>
              <div className='container'>
                <h3>What is SwipeMeIn?</h3>

              </div>
              <div className='container'>
                <p>We’ve all been there: it’s 7 PM, you’re on campus, and you’re hungry. You have two options: spend an absurd amount of money for on-campus dining or ask a friend to lend you a swipe.</p>
                <p>With meal plan minimums increasing and limited swipe donation programs to take advantage of, countless students end each year with extra swipes that are wasted. SwipeMeIn is a platform for those with extra swipes to make the most of their surplus and the hungry to score a free meal.</p>

              </div>
              {/* <div className='homedirections container'>
                <InfoCard title="Log in" text="Log in using your kerberos in OIDC." />
                <InfoCard title="Add/Claim a Swipe" text="Say where and when you'll eat, or find a place and time that works for your stomach." />
                <InfoCard title="Get Swiped!" text="Eat!" />
              </div> */}
              <div className='homedirections row container'>
                <div className='col'>
                  <InfoCard title="Log in" text="Log in using your kerberos in OIDC." />
                </div>
                <div className='col'>
                  <InfoCard title="Add/Claim a Swipe" text="Say where and when you'll eat, or find a place and time that works for your stomach." />
                </div>
                <div className='col'>
                  <InfoCard title="Get Swiped!" text="Eat!" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

class InfoCard extends Component {
  render() {
    return (
      // <div className='col-xs-1'>
      <rb.Card>
        <rb.Card.Body>
          <rb.Card.Title>{this.props.title}</rb.Card.Title>
          <rb.Card.Text>{this.props.text}</rb.Card.Text>
        </rb.Card.Body>
      </rb.Card>
      // </div>
    );
  }
}
