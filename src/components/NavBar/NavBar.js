import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/Home" className="logoTitle"> Transaction Dairy </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={2} href="/login">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
