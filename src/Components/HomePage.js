import React, {useEffect} from "react";
import Comments from "../Features/comments/Comments";
import SubredditSideBar from "./SubredditSideBar";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, commentsAreLoading, loadCommentsData } from "../Features/comments/commentsSlice";
import ROUTES from "../App/ROUTES";
import HomePageCategoryBox from "./HomePageCategoryBox";
import { useParams } from "react-router-dom";

export const HomePage = () => {
    const dispatch = useDispatch();
    const allData = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    const { category } = useParams();
    let url = `${ROUTES.reddit_url}/.json`;

    if (category) {
        url = `${ROUTES.reddit_url}/${category}/.json`;
    }

    useEffect(() => {
        dispatch(loadCommentsData(url));
    }, [dispatch, url]);
    
    //let allDataArr = allData.map(item => item);

    if (isLoading) {
        return <section className="loading">Loading data...</section>
    };

    return (
        <div className='threads'>
            <section className="sidebar-thread">
                <HomePageCategoryBox />
                <SubredditSideBar allData={allData}/>
            </section>
            <section className="comments-thread">
                <Comments allData={allData}/>
            </section>
        </div>
    );
};