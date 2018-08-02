import React, { Component } from 'react';
import logo from './logo.svg';
import Canvas from './Canvas.js';
import Palette from './Palette.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainGrid">
        <Canvas className="canvas" />
        <Palette className="palette" />
      </div>
    );
  }
}

export default App;
