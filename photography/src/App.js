import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.js';
import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Gallery from './Gallery/Gallery.js';

import logo from './logo.svg';
import './App.css';

let urls = [];

class App extends Component {
  render() {
    var req = require.context("../public/assets", false, /.*\.jpg/);
    req.keys().forEach(function(key){
      urls.push('/assets' + key.substr(1));
    });

    return (
      <div className="pagelayout">
        <Header className="header"/>
        <Navbar className="navbar"/>
        <Sidebar className="sidebar"/>
        <Gallery imageUrls={urls} className="gallery"/>
      </div>
    );
  }
}

export default App;
