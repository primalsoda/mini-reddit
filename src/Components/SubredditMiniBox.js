import React from "react";

export const SubredditMiniBox = (props) => {
    return (
        <div id={`SRSB_${props.index}`} className="SRSB_mini">
            <img className="profile-pic" src={props.profile_pic} />
            <h3>{props.subreddit}</h3>
            <p>{props.subscribers.toLocaleString()}</p>
        </div>
    )
};