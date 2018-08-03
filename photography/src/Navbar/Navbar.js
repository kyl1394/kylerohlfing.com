import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src="/logo.png" className="logo"/>
        <nav className="linkContainer">
            <a className="navItem active" href="#home">HOME</a>
            <a className="navItem" href="#news">NEWS</a>
            <a className="navItem" href="#contact">CONTACT</a>
            <a className="navItem" href="#about">ABOUT</a>
        </nav>
      </div>
    )
  }
}

export default Navbar;
