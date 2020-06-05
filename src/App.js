import React from 'react';
import './App.css';
import A from './components/01-exampleOne';
import B from './components/02-exampleTwo';
import C from './components/03-exampleThree';
import D from './components/04-exampleFour';
import E from './components/05-map-filter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <A/>
        <B/>
        <C/>
        <D/>
        <E/>
      </header>
    </div>
  );
}

export default App;
