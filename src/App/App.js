import React from 'react';
import './App.css';
import { SearchBar } from '../Components/Global/SearchBar';
import { reddit_url } from '../Features/comments/commentsSlice';
import Comments from '../Features/comments/Comments';

export const website_url = 'https://mini-reddit-codecademy.netlify.app'
const logo = 'https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png';

const getData = async () => {
  const data = await fetch(reddit_url);
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
      <main>
          <Comments />
      </main>
    </div>
  );
}

export default App;
