import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainlayout">
        <header className="logo"></header>
        <div className="navbar">
          <Navbar/>
        </div>
        <aside className="sidebar">
          <p>
            <strong>WEBSITE COMING SOON.</strong>
          </p>
          <p>
            Here you will be able to view the incredible wildlife photos taken by me: Kyle Rohlfing. I hope I can inspire you and teach you more about the animals from around the world. I hope to bring a small piece of the wilderness into your home.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum semper ligula, vehicula tincidunt neque efficitur eget. Quisque ornare velit quam, id sollicitudin erat cursus non. Praesent eget sodales orci, vestibulum faucibus neque. Etiam at enim sed erat maximus ultricies non at nulla. Aliquam vel odio a orci condimentum congue quis id ante. Maecenas sollicitudin mauris eu hendrerit pharetra. Sed sed ornare tellus. Curabitur nec metus id nisi luctus commodo rutrum quis leo. Morbi dignissim magna sit amet purus convallis, ut consectetur ligula iaculis. Phasellus tempus semper diam, non suscipit felis. Proin et augue quis ipsum pellentesque consectetur ac eu orci. Nulla placerat eros non felis ornare venenatis. Donec eget tortor et velit imperdiet mattis. Cras id justo ut massa sollicitudin suscipit in a arcu.
          </p>

        </aside>
        <main className="content"></main>
      </div>
    );
  }
}

export default App;
