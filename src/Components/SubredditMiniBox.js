import React from "react";

export const SubredditMiniBox = (props) => {
    return (
        <div id={`SRSB_${props.index}`} className="SRSB_mini">
            <h3>{props.subreddit}</h3>
            <p>{props.subscribers.toLocaleString()}</p>
        </div>
    )
};