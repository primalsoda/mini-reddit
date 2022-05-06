import React from 'react';
import './App.css';
import { SearchBar } from '../Components/Global/SearchBar';
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


// ------------------- SAMPLE FETCHES TO SEE DATA -------------------------


const sampleHomePageLink = ROUTES.reddit_url_json;
const getHomePageData = async () => {
  const data = await fetch(sampleHomePageLink);
  const json = await data.json();
  console.log(json.data.children);
};
getHomePageData();

const sampleProfileLink = 'https://www.reddit.com/user/LurkaLuna/.json';
const getProfileData = async () => {
  const data = await fetch(sampleProfileLink);
  const json = await data.json();
  console.log(json.data.children);
};
getProfileData();

const sampleCommentLink = 'https://www.reddit.com/r/funnysigns/comments/ujixi0/garage_sale_it_cracks_me_up_how_one_person/.json';
const getCommentData = async () => {
  const data = await fetch(sampleCommentLink);
  const json = await data.json();
  console.log(json.data.children);
};
getCommentData();

const sampleSubredditLink = 'https://www.reddit.com/r/funnysigns/comments/ujixi0/garage_sale_it_cracks_me_up_how_one_person/.json';
const getSubredditData = async () => {
  const data = await fetch(sampleSubredditLink);
  const json = await data.json();
  console.log(json.data.children);
};
getSubredditData();