
import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import "./App.scss";
import Card from './components/Card'
import Score from './components/Score';

function App() {

  return (
    <div className="App">
        <div className='header'>
        <h1>Reading / Typing Practice - Star Wars Edition </h1>
        <Score />
    </div>
    <Card />
    <div className="directions">
      <h5>Directions:</h5>
      <ol>
        <li>Hover over card to flip</li>
      </ol>
      
    </div>
    </div>
  );
}

export default App;
