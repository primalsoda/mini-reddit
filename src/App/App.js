import React from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar';
import ROUTES from './ROUTES';
import { Profile } from '../Features/profile/Profile';
import { Subreddit } from '../Features/subreddit/Subreddit';
import { CommentPage } from '../Features/commentPage/CommentPage';
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from '../Components/HomePage';

const logo = 'https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
          <Link to="/"><img src={logo} alt='reddit-logo' className='App-logo' /></Link>
          <div id="search">
            <SearchBar />
          </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/user/:user_id' element={<Profile />} />
          <Route path='/r/:subreddit/comments/:id/:title' element={<CommentPage />} />
          <Route path='/r/:subreddit' element={<Subreddit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


// ------------------- SAMPLE FETCHES TO SEE DATA -------------------------


/*
const sampleHomePageLink = ROUTES.reddit_url_json;
const getHomePageData = async () => {
  const data = await fetch(sampleHomePageLink);
  const json = await data.json();
  console.log(json.data.children);
};
getHomePageData();


const sampleProfileLink = 'https://www.reddit.com/user/FreeRangeMenses/.json';
const getProfileData = async () => {
  const data = await fetch(sampleProfileLink);
  const json = await data.json();
  console.log(json.data.children);
};
getProfileData();

*/
const sampleCommentLink = 'https://www.reddit.com/r/funny/comments/uozfwa/be_honest_you_did_something_like_this_at_least/.json';
const getCommentData = async () => {
  const data = await fetch(sampleCommentLink);
  const json = await data.json();
  console.log(json);
  console.log(json[0]);
  console.log(json[1]);
};
getCommentData();

/*
const sampleSubredditLink = 'https://www.reddit.com/r/funnysigns/.json';
const getSubredditData = async () => {
  const data = await fetch(sampleSubredditLink);
  const json = await data.json();
  console.log(json.data.children);
};
getSubredditData();
*/
