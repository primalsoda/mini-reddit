import React from "react";

const Comment = (props) => {
    const comment_url = `${props.website_url}${props.permalink}`;
    const subreddit_url = `${props.website}/r/${props.subreddit}`
    const profile_url = `${props.website_url}/user/${props.author}`;

    return (
        <div className="individual-comment">
            <div className="comment-top-portion">
                <a href={subreddit_url}>{props.subreddit_name_prefixed}</a>
                <p>Posted by <a href={profile_url}>u/{props.author}</a></p>
            </div>
            <div>
                // 
            </div>
            <h2>{props.title}</h2>
            <p>{props.name}</p>
        </div>
    )
};

export default Comment;