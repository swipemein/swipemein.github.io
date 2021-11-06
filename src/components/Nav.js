import React, { Component } from 'react';

import LoginService from '../services/LoginService';

import * as rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../site.css';

export default class SwipeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: !(localStorage.getItem(process.env.REACT_APP_SUB_ID) === null)
    }
  }

  render() {

    let navbarItems;
    if (!this.state.loggedIn) {
      navbarItems = (
        <>
          <rb.Nav.Link href='/#/login'>Login</rb.Nav.Link>
        </>
      );
    } else {
      navbarItems = (
        <>
          <rb.Nav.Link href='/#/dashboard'>Dashboard</rb.Nav.Link>
          <rb.Nav.Link href='/#/profile'>Profile</rb.Nav.Link>
          <rb.Nav.Link href='/' onClick={() => LoginService.logOut()}>Logout</rb.Nav.Link>
        </>
      );
    }

    return (
      <rb.Navbar>
        <rb.Navbar.Brand href='/'>SwipeMeIn</rb.Navbar.Brand>
        <rb.Navbar.Collapse>
          <rb.Nav className='ml-auto'>
            {navbarItems}
          </rb.Nav>
        </rb.Navbar.Collapse>
      </rb.Navbar>
    );
  }
}
