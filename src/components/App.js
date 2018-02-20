import React, { Component } from 'react';
import logo from '../assets/imgs/logo.png';
import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo"/>
          <h1 className="app-title">music</h1>
        </header>
      </div>
    );
  }
}

export default App;
