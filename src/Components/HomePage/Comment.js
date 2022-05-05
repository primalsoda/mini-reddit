import React from "react";

const Comment = ({title, name}) => {
    return (
        <div className="individual-comment">
            <h2>{title}</h2>
            <p>{name}</p>
        </div>
    )
};

export default Comment;