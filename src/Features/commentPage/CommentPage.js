import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComment } from "./commentPageSlice";
import { selectComment } from "./commentPageSlice";
import { commentIsLoading } from "./commentPageSlice";
// import Comment from "../../Components/Global/Comment";
import { useParams } from "react-router-dom";

export const CommentPage = () => {
    const dispatch = useDispatch();
    const commentData = useSelector(selectComment);
    const isLoading = useSelector(commentIsLoading);
    let { subreddit, id, title } = useParams();

    useEffect(() => {
        dispatch(loadComment({subreddit: subreddit, id: id, title: title}));
    }, [dispatch])


    if (isLoading) {
        return <div>Loading comment data...</div>
    };
    
    return (
        <>
            <h1>{subreddit}</h1>
            <p>{id}</p>
            <p>{title}</p>
            
        </>
    )
};

