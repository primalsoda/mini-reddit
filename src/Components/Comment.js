import React from "react";
import { loadSubreddit } from "../Features/subreddit/subredditSlice";
import { loadProfile } from "../Features/profile/profileSlice";
import { loadComment } from "../Features/commentPage/commentPageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faLink, faShareAlt, faArrowUpShortWide } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Comment = (props) => {
    const dispatch = useDispatch();
    const comment_url = `${props.permalink}`;
    const subreddit_url = `/r/${props.subreddit}`;
    const profile_url = `/user/${props.author}`;

    const likeCount = parseFloat(props.ups/1000).toFixed(1);
    const title = props.title.length > 200 ? `${props.title.substring(0,201)}...` : `${props.title}`;

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
                    <div className="other-spacer"></div>
                </section>
                <div className="comment-bottom">
                    <Link to={comment_url} className="comment-bottom-link" onClick={handleClickComment}>
                        <button>
                            <FontAwesomeIcon icon={faComments} className="comment-bottom-icon"/>
                            <p>Comments</p>
                        </button>
                    </Link>
                    <Link to={comment_url} className="comment-bottom-link" onClick={handleClickComment}>
                        <button>
                            <FontAwesomeIcon icon={faLink} className="comment-bottom-icon"/>
                            <p>Details</p>
                        </button>
                    </Link>
                    <Link to="" className="comment-bottom-link">
                        <button>
                            <FontAwesomeIcon icon={faShareAlt} className="comment-bottom-icon"/>
                            <p>Share</p>
                        </button>
                    </Link>
                </div> 
            </div>
            <div className="spacer"></div>
            <div className="like-box">
                    <p>{`${likeCount}K`}</p>
                    <div><FontAwesomeIcon icon={faArrowUpShortWide} /></div>
            </div>
        </section>
    )
};

export default Comment;