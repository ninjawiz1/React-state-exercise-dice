import React, { Component } from 'react'
import RollDice from './RollDice';

import './App.css';



export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>State Exercise</h1>
        <RollDice/>
      </div>
    )
  }
}

export default App

