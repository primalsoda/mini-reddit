import React from 'react';
import './App.css';
// import { icons } from '../icons';
import { SearchBar } from '../Components/SearchBar';

const logo = 'https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
          <img src={logo} alt='reddit-logo' className='App-logo'></img>
          <div id="search">
            <SearchBar />
          </div>
      </header>
      
    </div>
  );
}

export default App;
