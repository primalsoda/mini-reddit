import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../Features/subreddit/subredditSlice";

export const SubredditMiniBox = (props) => {
    const dispatch = useDispatch();
    const subreddit_url = `/r/${props.subreddit}`;

    return (
        //
            <Link to={subreddit_url} id={`SRSB_${props.index}`} className="SRSB_mini" onClick={(e) => dispatch(loadSubreddit(props.subreddit))}>
                <button>
                    <img className="profile-pic" alt="profile pic" src={props.profile_pic} />
                    <h3>{props.subreddit}</h3>
                    <p>{props.subscribers.toLocaleString()}</p>
                </button>
            </Link>
    )
};