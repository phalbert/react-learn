import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import {Hello} from './components/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
         <Greet name="Bruce" heroName="Superman">
           <p>This is a children prop</p>
         </Greet>
         <Greet name="Diana" heroName="Wonderwoman">
            <button>Click Here</button>
         </Greet>
         <Welcome name="good"/>
         <Welcome name="bad"/>
         <Hello/>
      </div>
    );
  }
}

export default App;
