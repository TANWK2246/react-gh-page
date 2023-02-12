import React from 'react'
import logo from '../logo.svg';
import '../Tutorial.css';
import Greet from './Greet'
import Welcome from './Welcome'

export default function Tutorial() {
  return (
    <div className="App">
      <Greet name="Apple"/>
      <Greet name="Bruce Lee"/>
      <Welcome name="Diana"/>

      <header className="App-header">
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
      </header>
    </div>
  )
}
