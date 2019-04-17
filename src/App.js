import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import {Hello} from './components/Hello'
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
         <Greet name="Bruce" heroName="Superman">
           <p>This is a children prop</p>
         </Greet>
        <Message />
      </div>
    );
  }
}

export default App;
