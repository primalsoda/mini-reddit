import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit } from "./subredditSlice";
import { loadSubreddit } from "./subredditSlice";
import { subredditIsLoading } from "./subredditSlice";
import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";

export const Subreddit = () => {
    const dispatch = useDispatch();
    const subredditData = useSelector(selectSubreddit);
    const isLoading = useSelector(subredditIsLoading);
    let { subreddit } = useParams();

    useEffect(() => {
        dispatch(loadSubreddit(subreddit));
    }, [dispatch])


    if (isLoading) {
        return <div>Loading data...</div>
    };
    
    return (
        <>
            <h1>{`r/${subreddit}`}</h1>
            <Comments allData={subredditData}/>
            
        </>
    )
};