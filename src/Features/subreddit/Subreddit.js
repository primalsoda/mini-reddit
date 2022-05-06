import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit } from "./subredditSlice";
import { loadSubreddit } from "./subredditSlice";
import { subredditIsLoading } from "./subredditSlice";
import { useParams } from "react-router-dom";

export const Subreddit = () => {
    const dispatch = useDispatch();
    const subredditData = useSelector(selectSubreddit);
    const isLoading = useSelector(subredditIsLoading);
    let { id } = useParams();

    //console.log(subredditData);

    useEffect(() => {
        dispatch(loadSubreddit(id));
    }, [dispatch])


    if (isLoading) {
        return <div>Loading Subreddit data...</div>
    };
    
    return (
        <>
            <h1>{`r/${id}`}</h1>
            
        </>
    )
};