import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'

import Quiz from './Quiz';



 class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </div>
          <Quiz/>
          
      </div>
    );
  }
 }
export default App;