import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <img src="/background.jpg" className="backgroundImage" />
      </div>
    );
  }
}

export default Header;
