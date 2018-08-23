import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.js';
import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Gallery from './Gallery/Gallery.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pagelayout">
        <Header className="header"/>
        <Navbar className="navbar"/>
        <Sidebar className="sidebar"/>
        <Gallery className="gallery"/>
      </div>
    );
  }
}

export default App;
