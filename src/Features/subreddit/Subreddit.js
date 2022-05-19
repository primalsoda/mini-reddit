import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit } from "./subredditSlice";
import { loadSubreddit } from "./subredditSlice";
import { subredditIsLoading } from "./subredditSlice";
import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import SubredditSideBar from "../../Components/SubredditSideBar";
import { selectComments, loadCommentsData, commentsAreLoading } from "../comments/commentsSlice";
import ROUTES from "../../App/ROUTES";
import Loading from "../../Components/Loading";

export const Subreddit = () => {
    const dispatch = useDispatch();
    const subredditData = useSelector(selectSubreddit);
    const isLoading = useSelector(subredditIsLoading);
    let { subreddit } = useParams();

    const homePageData = useSelector(selectComments);
    const homePageLoading = useSelector(commentsAreLoading);
    let url = ROUTES.reddit_url_json

    useEffect(() => {
        dispatch(loadSubreddit(subreddit));
        dispatch(loadCommentsData(url))
    }, [dispatch, subreddit, url])


    if (isLoading || homePageLoading) {
        return <Loading />
    };

    if (!subredditData.length) {
        return <div className="failed-search">Try new search term</div>
    };
    
    return (
        <div className='threads'>
            <section className="sidebar-thread">
                <SubredditSideBar allData={homePageData} />
            </section>
            <section className="comments-thread">
                <h1>{`r/${subreddit}`}</h1>
                <Comments allData={subredditData}/>
            </section>
        </div>
    );    
};