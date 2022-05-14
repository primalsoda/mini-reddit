import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DiscussionCard = ({username, body}) => {
    //
    return (
        <div className="discussion-card">
            {<p>{username}</p>}
            <div className="discussion-card-middle">
                {<p>{body}</p>}
            </div>
            <div className="discussion-card-bottom">
                <Link to="/"><button><FontAwesomeIcon icon={faArrowUp} /> UpVote</button></Link>
                <Link to="/"><button><FontAwesomeIcon icon={faShareAlt} /> Share</button></Link>
            </div>
        </div>
    );
};

export default DiscussionCard;