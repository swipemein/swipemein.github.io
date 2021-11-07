import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
import LoginService from '../services/LoginService';
import { diningHallStrings } from '../components/Constants.js';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getURL } from '../Utils.js';

export default class AddSwipe extends Component {

  submitForm(event) {
    event.preventDefault();

    let form = {};
    ['swipedininghall', 'swipedate', 'swipetime', 'swipeprice'].forEach(key => {
      form[key] = document.getElementById(key).value;
    });
    console.log(form['swipeprice']);
    if (form['swipedate'] === "") {
      alert("Please enter the date of your swipe.");
      return;
    }
    if (form['swipetime'] === "") {
      alert("Please enter the time of your swipe.");
      return;
    }
    if (form['swipeprice'] === "") {
      alert("Please enter the price of your swipe.");
      return;
    }

    document.getElementById('submitbutton').disabled = true;
    let swipeTime = Date.parse(form['swipedate'] + "T" + form['swipetime']);

    let swipe = {
      active: true,
      claimedBy: null,
      location: form['swipedininghall'],
      ownedBy: null,
      swipeTime: swipeTime,
      price: Number(form['swipeprice']),
    }

    fetch(
      getURL() + '/addswipe?data=' + JSON.stringify(swipe),
			{
        method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(response => {
      if (response.status === 500) {
        alert("Internal 500 error: couldn't add swipe.");
      } else if (response.status === 200) {
        alert("Swipe added successfully!");
      } else {
        alert("Unknown response status: " + response.status);
      }
      document.getElementById('submitbutton').disabled = false;
    });
  }

  render() {
    if (!LoginService.isLoggedIn()) {
      return LoginService.redirectLogin();
    }
    let diningHalls = diningHallStrings.map(hall => <option key={hall}>{hall}</option>);
    return (
      <>
        <SwipeNav />
        <div className='container'>
          <h1 className='pagetitle'>Add Swipe</h1>
        </div>
        <div className='container'>
          <rb.Card>
            <rb.Card.Body>

              <rb.Form onSubmit={this.submitForm} id='swipeform'>
                <rb.Form.Group>
                  <rb.Form.Label>Location</rb.Form.Label>
                  <rb.Form.Control as='select' id='swipedininghall'>
                    {diningHalls}
                  </rb.Form.Control>
                </rb.Form.Group>
                <rb.Form.Row>
                  <div className='col-xs-4'>
                    <rb.Form.Group>
                      <rb.Form.Label>Day</rb.Form.Label>
                      <rb.Form.Control type='date' id='swipedate' />
                    </rb.Form.Group>
                  </div>
                  <div className='col-xs-4'>
                    <rb.Form.Group>
                      <rb.Form.Label>Time</rb.Form.Label>
                      <rb.Form.Control type='time' id='swipetime' />
                    </rb.Form.Group>
                  </div>
                  <div className='col-xs-4'>
                    <rb.Form.Group>
                      <rb.Form.Label>Price ($)</rb.Form.Label>
                      <rb.Form.Control type='number' step='0.01' min='0' defaultValue='0' id='swipeprice' />
                    </rb.Form.Group>
                  </div>
                </rb.Form.Row>
                <rb.Button type='submit' id='submitbutton'>Submit</rb.Button>
              </rb.Form>
            </rb.Card.Body>
          </rb.Card>
        </div>
      </>
    );
  }
}