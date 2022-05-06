import React from "react";
import { loadSubreddit } from "../../Features/subreddit/subredditSlice";
//import { loadProfile } from "../../Features/profile/profileSlice";
import { Profile } from "../../Features/profile/Profile";
import { loadComment } from "../../Features/commentPage/commentPageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faLink, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import ROUTES from "../../App/ROUTES";
import { Link } from "react-router-dom";

const Comment = (props) => {
    const reddit_url = ROUTES.reddit_url;
    const subreddit_url_json = `${reddit_url}/r/${props.subreddit}/.json`;
    const profile_url_json = `${reddit_url}/user/${props.author}/.json`;
    const comment_url_json = `${reddit_url}${props.permalink}.json`;

    
    const comment_url = `${props.website_url}${props.permalink}`;
    const subreddit_url = `${props.website}/r/${props.subreddit}`
    //const profile_url = `${props.website_url}/user/${props.author}`;

    const likeCount = parseFloat(props.ups/1000).toFixed(1);
    const title = `${props.title.substring(0,230)}...`;

    return (
        <section className="individual-comment">
            <div className="comment-container">
                <section className="comment-top">
                    <img src={props.profile_pic} alt={`profile for ${props.author}`} className="profile-pic"/>
                    <a className="subreddit-link" href={subreddit_url} onClick={() => loadSubreddit(subreddit_url_json)}>{props.subreddit_name_prefixed}</a>
                    <p>Posted by <a href="/" className="author-link" onClick={() => Profile(profile_url_json)}>u/{props.author}</a></p>
                </section>
                <section className="comment-body">
                    <h2><a className="title-link" href={comment_url} onClick={() => loadComment(comment_url_json)}>{title}</a></h2> 
                    <img alt="comment thumbnail" className="comment-thumbnail" src={props.thumbnail_video ? props.thumbnail_video : props.thumbnail_image}/>
                    <span className="spacer"></span>
                    <div className="like-count-box">
                        <p>{`${likeCount}K`}</p>
                    </div>
                </section>
                <div className="comment-bottom">
                    <button className="discussion-btn"><FontAwesomeIcon icon={faComments} /></button>
                    <button className="links-btn"><FontAwesomeIcon icon={faLink} /></button>
                    <button className="share-btn"><FontAwesomeIcon icon={faShareAlt} /></button>
                </div> 
            </div>
        </section>
    )
};

export default Comment;