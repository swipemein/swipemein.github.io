import React, { Component } from 'react';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTimeString } from '../Utils.js';
import LoginService from '../services/LoginService.js';

export default class Swipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swipe: this.props.swipe,
    }
  }

  render() {
    let swipe = this.state.swipe;

    let claimSwipeButton;
    if (swipe.claimedBy.id === 'null') {
      claimSwipeButton = (<rb.Button>Claim Swipe</rb.Button>);
    } else if (swipe.claimedBy.id === LoginService.getUID()) {
      claimSwipeButton = (<rb.Button className='cancelClaimBtn'>Cancel Claim</rb.Button>)
    } else {
      claimSwipeButton = (<rb.Button disabled>Swipe Claimed</rb.Button>);
    }

    return (
      <div className='swipecard container'>
        <div className='col-xs-4'>
          <rb.Card>
            <rb.Card.Body>
              <div>
                <div className='row'>
                  <rb.Card.Title className='col'>{swipe.location}</rb.Card.Title>
                  <rb.Card.Title className='col text-right'>${swipe.price}</rb.Card.Title>
                </div>
                <div className='row'>
                  <rb.Card.Subtitle className='col'>{getTimeString(swipe.swipeTime)}</rb.Card.Subtitle>
                  <rb.Card.Text className='col swipeText'>
                    {swipe.ownedBy.firstName}, {swipe.ownedBy.email}
                  </rb.Card.Text>
                </div>
                <div className='row'>
                  <div className='col claimSwipeArea'>
                    {claimSwipeButton}
                    <rb.Nav.Link href={'/#/swipeinfo/'+swipe.id}>Info</rb.Nav.Link>
                  </div>
                  <rb.Card.Text className='col swipeText'>
                    Social Preference: {swipe.ownedBy.socialPreference}
                  </rb.Card.Text>
                </div>
              </div>
            </rb.Card.Body>
          </rb.Card>
        </div>
      </div>
    )
  }
}
