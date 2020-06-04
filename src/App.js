import React from 'react';
import './App.css';
import A from './components/exampleOne';
import B from './components/exampleTwo';
import C from './components/exampleThree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <A/>
        <B/>
        <C/>
      </header>
    </div>
  );
}

export default App;
