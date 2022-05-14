import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadSubreddit } from "../Features/subreddit/subredditSlice";

export const SubredditMiniBox = (props) => {
    const dispatch = useDispatch();
    const subreddit_url = `/r/${props.subreddit}`;

    return (
        //
            <Link to={subreddit_url} id={`SRSB_${props.index}`} className="SRSB-mini" onClick={(e) => dispatch(loadSubreddit(props.subreddit))}>
                <button>
                    <div className="SRSB-img-div">
                        <img className="sidebar-profile-pic" alt="profile pic" src={props.profile_pic} />
                    </div>
                    <div className="SRSB-mini-right">
                        <h3>{props.subreddit}</h3>
                        <p>{`${props.subscribers.toLocaleString()} Subscribers`}</p>
                    </div>
                </button>
            </Link>
    )
};