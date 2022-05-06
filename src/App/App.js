import React from 'react';
import './App.css';
import { SearchBar } from '../Components/Global/SearchBar';
import { reddit_url } from '../Features/comments/commentsSlice';
import Comments from '../Features/comments/Comments';
import ROUTES from './ROUTES';

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
      <main>
          <Comments />
      </main>
    </div>
  );
}

export default App;


const getData = async () => {
  const data = await fetch(ROUTES.reddit_url_json);
  const json = await data.json();
  console.log(json.data.children);
};
getData();

const sampleProfileLink = 'https://www.reddit.com/user/LurkaLuna/.json';
const getProfileData = async () => {
  const data = await fetch(sampleProfileLink);
  const json = await data.json();
  console.log(json.data.children);
};
getProfileData();
