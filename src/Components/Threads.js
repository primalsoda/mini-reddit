import React, {useEffect} from "react";
import _Comments from "../Features/comments/_Comments";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, commentsAreLoading, loadCommentsData } from "../Features/comments/_commentsSlice";
import SubredditSideBar from "./SubredditSideBar";

export const Threads = () => {
    const dispatch = useDispatch();
    const allData = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    
    useEffect(() => {
        dispatch(loadCommentsData());
    }, [dispatch]); 

    if (isLoading) {
        return <section className="loading">Loading data...</section>
    };

    return (
        <div className='threads'>
            <section className="comments-thread">
                <_Comments allData={allData}/>
            </section>
            <section className="subreddit-sidebar-thread">
                <SubredditSideBar allData={allData}/>
            </section>
        </div>
    );
};