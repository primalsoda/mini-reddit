import React, {useEffect} from "react";
import _Comments from "../Features/comments/_Comments";
import SubredditSideBar from "./SubredditSideBar";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, commentsAreLoading, loadCommentsData } from "../Features/comments/_commentsSlice";
import ROUTES from "../App/ROUTES";
import HomePageCategoryBox from "./HomePageCategoryBox";

export const HomePage = () => {
    const dispatch = useDispatch();
    const allData = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    const url = ROUTES.reddit_url_json;
    
    useEffect(() => {
        dispatch(loadCommentsData(url));
    }, [dispatch]); 

    if (isLoading) {
        return <section className="loading">Loading data...</section>
    };

    return (
        <div className='threads'>
            <section className="comments-thread">
                <_Comments allData={allData}/>
            </section>
            <section className="sidebar-thread">
                <HomePageCategoryBox />
                <SubredditSideBar allData={allData}/>
            </section>
        </div>
    );
};