import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainlayout">
        <header className="logo"></header>
        <nav className="navbar">
          <ul className="navbar-nav">
              <li className="nav-item">test</li>
              <li className="nav-item">test2</li>
          </ul>
        </nav>
        <aside className="sidebar"></aside>
        <main className="content"></main>
      </div>
    );
  }
}

export default App;
