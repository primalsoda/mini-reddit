import React from "react";
import { loadSubreddit } from "../Features/subreddit/subredditSlice";
import { loadProfile } from "../Features/profile/profileSlice";
import { loadComment } from "../Features/commentPage/commentPageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faLink, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Comment = (props) => {
    const comment_url = `${props.permalink}`;
    const subreddit_url = `/r/${props.subreddit}`
    const profile_url = `/user/${props.author}`;

    const likeCount = parseFloat(props.ups/1000).toFixed(1);
    const title = props.title.length > 224 ? `${props.title.substring(0,225)}...` : `${props.title}`;

    const dispatch = useDispatch();

    return (
        <section className="individual-comment">
            <div className="comment-container">
                <section className="comment-top">
                    <img src={props.profile_pic} alt={`profile for ${props.author}`} className="profile-pic"/>
                    <Link className="subreddit-link" to={subreddit_url} onClick={(e) => dispatch(loadSubreddit(props.subreddit))}>{props.subreddit_name_prefixed}</Link>
                    <p>Posted by <Link to={profile_url} className="author-link" onClick={(e) => dispatch(loadProfile(props.author))}>u/{props.author}</Link></p>
                </section>
                <section className="comment-body">
                    <h2><Link className="title-link" to={comment_url} onClick={(e) => dispatch(loadComment({subreddit: props.subreddit, id: props.id, title: props.title}))}>{title}</Link></h2> 
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