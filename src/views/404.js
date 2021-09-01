import React, { Component } from 'react';
import SwipeNav from '../components/Nav.js';
// import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class WebpageNotFound extends Component {
  render() {
    return (
      <div>
        <SwipeNav />
        <div className='container'>
          <h1 className='pagetitle'>Error 404: Page not found</h1>
        </div>
      </div>
    );
  }
}