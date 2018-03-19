import React, { Component } from 'react';
import logo from '../assets/images/yulong.jpeg';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My World</h1>
        </header>
        <p className="App-intro">
			As lazy as possible
        </p>
      </div>
    );
  }
}
