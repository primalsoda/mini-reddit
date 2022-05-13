import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComment } from "./commentPageSlice";
import { selectComment } from "./commentPageSlice";
import { commentIsLoading } from "./commentPageSlice";
import _Comments from "../comments/_Comments";
import { useParams } from "react-router-dom";

export const CommentPage = () => {
    const dispatch = useDispatch();
    //const commentData = useSelector(selectComment);
    const isLoading = useSelector(commentIsLoading);
    let { subreddit, id, title } = useParams();

    useEffect(() => {
        dispatch(loadComment({subreddit: subreddit, id: id, title: title}));
    }, [dispatch])


    if (isLoading) {
        return <div className="load-comment">Loading comment data...</div>
    };
    
    return (
        <>
            <p>{title}</p>
            <p>{id}</p>
            <p>{subreddit}</p> 
        </>
    )
};

