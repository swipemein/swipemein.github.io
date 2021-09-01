import React, { Component } from 'react';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTimeString } from '../Utils.js';

export default class Swipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swipe: this.props.swipe,
    }
  }

  render() {
    let swipe = this.state.swipe
    return (
      <div className='swipecard container'>
        <div className='col-xs-4'>
          <rb.Card>
            <rb.Card.Body>
              <rb.Card.Title>{swipe.location}</rb.Card.Title>
              <rb.Card.Subtitle>{getTimeString(swipe.swipeTime)}</rb.Card.Subtitle>
              <rb.Card.Text>

              </rb.Card.Text>
              <rb.Button>Claim Swipe</rb.Button>
              <rb.Card.Link href={'/#/swipeinfo/' + swipe.id}>Info</rb.Card.Link>
            </rb.Card.Body>
          </rb.Card>
        </div>
      </div>
    )
  }
}
