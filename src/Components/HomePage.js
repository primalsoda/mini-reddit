import React, {useEffect} from "react";
import Comments from "../Features/comments/Comments";
import SubredditSideBar from "./SubredditSideBar";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, commentsAreLoading, loadCommentsData } from "../Features/comments/commentsSlice";
import ROUTES from "../App/ROUTES";
import HomePageCategoryBox from "./HomePageCategoryBox";

export const HomePage = () => {
    const dispatch = useDispatch();
    const allData = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    
    useEffect(() => {
        const url = ROUTES.reddit_url_json;
        dispatch(loadCommentsData(url));
    }, [dispatch]); 

    if (isLoading) {
        return <section className="loading">Loading data...</section>
    };

    return (
        <div className='threads'>
            <section className="comments-thread">
                <Comments allData={allData}/>
            </section>
            <section className="sidebar-thread">
                <HomePageCategoryBox />
                <SubredditSideBar allData={allData}/>
            </section>
        </div>
    );
};