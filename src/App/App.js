import React from 'react';
import './App.css';
// import { icons } from '../icons';
import { SearchBar } from '../Components/Global/SearchBar';
import { url } from '../Features/comments/commentsSlice';
import Comments from '../Features/comments/Comments';

const logo = 'https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png';

const getData = async () => {
  const data = await fetch(url);
  const json = await data.json();
  console.log(json.data.children);
};

getData();

function App() {
  return (
    <div className="App">
      <header className='App-header'>
          <img src={logo} alt='reddit-logo' className='App-logo'></img>
          <div id="search">
            <SearchBar />
          </div>
      </header>
      <div className="main-thread">
        <Comments />
      </div>
    </div>
  );
}

export default App;
