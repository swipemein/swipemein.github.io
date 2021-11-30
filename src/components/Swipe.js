import React, { Component } from 'react';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTimeString, getURL } from '../Utils.js';
import LoginService from '../services/LoginService.js';

export default class Swipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swipe: this.props.swipe,
      deleted: false,
    }
  }

  async claimSwipe(swipe, event) {
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
      } else if (response.status !== 200) {
        alert("Unknown response status: " + response.status);
      }
      return response.json();
    }).then(data => {
        this.setState({
          swipe: data,
        });
      }
    );
  }

  async unclaimSwipe(swipe, event) {
    event.preventDefault();
    fetch(
      getURL() + '/unclaimSwipe?id=' + swipe.id,
			{
        method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(response => {
      if (response.status === 500) {
        alert("Internal 500 error: couldn't unclaim swipe.");
        return null;
      } else if (response.status !== 200) {
        alert("Unknown response status: " + response.status);
      }
      return response.json();
    }).then(data => {
        if (data === null) return;
        this.setState({
          swipe: data,
        });
      }
    );
  }

  async deleteSwipe(swipe, event) {
    event.preventDefault();
    fetch(
      getURL() + '/deleteswipe?id=' + swipe.id,
			{
        method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': LoginService.getToken()
				}
			}
    ).then(response => {
      if (response.status === 500) {
        alert("Internal 500 error: couldn't delete swipe.");
        return;
      } else if (response.status !== 200) {
        alert("Unknown response status: " + response.status);
      }
      this.setState({
        deleted: true,
      });
    });
  }

  render() {

    if (this.state.deleted) {
      return (<></>);
    }

    let swipe = this.state.swipe;
    // console.log(swipe);
    // return (<></>);

    let claimSwipeButton;
    if (swipe.claimedBy.id === 'null') {
      claimSwipeButton = (<rb.Button onClick={e => this.claimSwipe(swipe, e)}>Claim Swipe</rb.Button>);
    } else if (swipe.claimedBy.id === LoginService.getUID()) {
      claimSwipeButton = (<rb.Button className='cancelClaimBtn' onClick={e => this.unclaimSwipe(swipe, e)}>Cancel Claim</rb.Button>)
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
                    {
                      swipe.ownedBy.id === LoginService.getUID() && 
                      <rb.Nav.Link onClick={e => this.deleteSwipe(swipe, e)}>Delete</rb.Nav.Link>
                    }
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
