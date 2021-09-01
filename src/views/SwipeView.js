import React, { Component } from 'react';

import SwipeNav from '../components/Nav.js';
import LoginService from '../services/LoginService';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTimeString, getURL } from '../Utils.js';

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

    fetch(getURL() + '/getswipe?id=' + swipeID).then(
      response => response.json()
    ).then(
      data => {
        this.setState({
          swipe: data
        });
      }
    );
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
              <rb.Card>
                <rb.Card.Body>
                  <rb.Card.Title>{swipe.location}</rb.Card.Title>
                  <rb.Card.Subtitle>{getTimeString(swipe.swipeTime)}</rb.Card.Subtitle>
                  <ul>
                    <li>
                      Owner: {swipe.ownedBy.firstName}
                    </li>
                    <li>
                      Status: {swipe.active ? "Active" : "Inactive"}
                    </li>
                  </ul>
                  <rb.Button>Claim Swipe</rb.Button>
                </rb.Card.Body>
              </rb.Card>
            )
            }
          </div>
        </div>
      </>
    );
  }
}