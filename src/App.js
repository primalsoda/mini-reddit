import React from 'react';
import './App.css';
import { icons } from './icons';

const logo = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F06%2FReddit_logo_full_1.png&f=1&nofb=1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icons.best_icon} className="App-logo" alt="logo" />
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
  );
}

export default App;
