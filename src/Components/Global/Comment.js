import React from "react";
import { loadSubreddit } from "../../Features/subreddit/subredditSlice";
import { loadProfile } from "../../Features/profile/profileSlice";
import { loadComment } from "../../Features/commentPage/commentPageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faLink, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Comment = (props) => {
    const reddit_url = `https://reddit.com`;
    const subreddit_url_json = `${reddit_url}/r/${props.subreddit}/.json`;
    const profile_url_json = `${reddit_url}/user/${props.author}/.json`;
    const comment_url_json = `${reddit_url}${props.permalink}.json`;

    
    const comment_url = `${props.website_url}${props.permalink}`;
    const subreddit_url = `${props.website}/r/${props.subreddit}`
    const profile_url = `${props.website_url}/user/${props.author}`;

    return (
        <div className="individual-comment">
            <section className="comment-top">
                <img src={props.profile_pic} alt={`profile image for ${props.author}`} className="profile-pic"/>
                <a href={subreddit_url} onClick={() => loadSubreddit(subreddit_url_json)}>{props.subreddit_name_prefixed}</a>
                <p>Posted by <a href={profile_url} onClick={() => loadProfile(profile_url_json)}>u/{props.author}</a></p>
            </section>
            <section className="comment-body">
                <h2><a href={comment_url} onClick={() => loadComment(comment_url_json)}>{props.title}</a></h2> 
                <img className="comment-thumbnail" src={props.thumbnail_video ? props.thumbnail_video : props.thumbnail_image}/>
                <div className="bottom-links">
                    <button className="discussion-btn"><FontAwesomeIcon icon={faComments} /></button>
                    <button className="links-btn"><FontAwesomeIcon icon={faLink} /></button>
                    <button className="share-btn"><FontAwesomeIcon icon={faShareAlt} /></button>
                </div> 
            </section>

        </div>
    )
};

export default Comment;