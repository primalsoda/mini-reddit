import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const DiscussionCard = ({username, body}) => {
    //
    return (
        <div className="discussion-card">
            {<p>{username}</p>}
            <div className="discussion-card-middle">
                {<p>{body}</p>}
            </div>
            <div className="discussion-card-bottom">
                <button><FontAwesomeIcon icon={faArrowUp} /> UpVote</button>
                <button><FontAwesomeIcon icon={faShareAlt} /> Share</button>
            </div>
        </div>
    );
};

export default DiscussionCard;