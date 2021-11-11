import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
import LoginService from '../services/LoginService';

import 'bootstrap/dist/css/bootstrap.min.css';
import { getURL } from '../Utils.js';
import Swipe from '../components/Swipe.js';

export default class SwipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipe: {}
    }
  }

  componentDidMount() {
    let hashes = window.location.hash.split("/");
    let swipeID = hashes[hashes.length - 1];

    fetch(
      getURL() + '/getswipe?id=' + swipeID,
			{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(
      response => response.json()
    ).then(
      data => {
        this.setState({
          swipe: data
        });
      }
    );
  }

  claimSwipe(swipe, event) {
    event.preventDefault();
    fetch(
      getURL() + '/claimSwipe?id=' + swipe.id,
			{
        method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(response => {
      if (response.status === 500) {
        alert("Internal 500 error: couldn't claim swipe.");
      } else if (response.status === 200) {
        alert("Swipe claimed successfully!");
      } else {
        alert("Unknown response status: " + response.status);
      }
    });
  }

  render() {
    if (!LoginService.isLoggedIn()) {
      return LoginService.redirectLogin();
    }
    let swipe = this.state.swipe;
    return (
      <>
        <SwipeNav />
        <div className='container'>
          <div className='col-xs-4'>
            {Object.entries(swipe).length === 0 ? ("loading") : 
            (
              <Swipe swipe={swipe} />
            )
            }
          </div>
        </div>
      </>
    );
  }
}