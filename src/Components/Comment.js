import React from "react";
import { loadSubreddit } from "../Features/subreddit/subredditSlice";
import { loadProfile } from "../Features/profile/profileSlice";
import { loadComment } from "../Features/commentPage/commentPageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faLink, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Comment = (props) => {
    const dispatch = useDispatch();
    const comment_url = `${props.permalink}`;
    const subreddit_url = `/r/${props.subreddit}`;
    const profile_url = `/user/${props.author}`;

    const likeCount = parseFloat(props.ups/1000).toFixed(1);
    const title = props.title.length > 224 ? `${props.title.substring(0,225)}...` : `${props.title}`;

    const handleClickSubreddit = (e) => {
        dispatch(loadSubreddit(props.subreddit));
    };

    const handleClickComment = (e) => {
        dispatch(loadComment({subreddit: props.subreddit, id: props.id, title: props.title}));
    };

    const handleClickProfile = (e) => {
        dispatch(loadProfile(props.author));
    };

    return (
        <section className="individual-comment">
            <div className="comment-container">
                <section className="comment-top">
                    <img src={props.profile_pic} alt={`profile for ${props.author}`} className="profile-pic"/>
                    <Link className="subreddit-link" to={subreddit_url} onClick={handleClickSubreddit}>{props.subreddit_name_prefixed}</Link>
                    <p>Posted by <Link className="author-link" to={profile_url} onClick={handleClickProfile}>u/{props.author}</Link></p>
                </section>
                <section className="comment-body">
                    <h2><Link className="title-link" to={comment_url} onClick={handleClickComment}>{title}</Link></h2> 
                    <img alt="comment thumbnail" className="comment-thumbnail" src={props.thumbnail_image}/>
                    <span className="spacer"></span>
                    <div className="like-count-box">
                        <p>{`${likeCount}K`}</p>
                    </div>
                </section>
                <div className="comment-bottom">
                    <Link to={comment_url} className="comment-bottom-link" onClick={handleClickComment}>
                        <button><FontAwesomeIcon icon={faComments} /> Comments</button>
                    </Link>
                    <Link to={comment_url} className="comment-bottom-link" onClick={handleClickComment}>
                        <button><FontAwesomeIcon icon={faLink} /> Details</button>
                    </Link>
                    <Link to="" className="comment-bottom-link">
                        <button><FontAwesomeIcon icon={faShareAlt} /> Share</button>
                    </Link>
                </div> 
            </div>
        </section>
    )
};

export default Comment;