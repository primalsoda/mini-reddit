import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, profileIsLoading, loadProfile } from "./profileSlice";
import Comments from "../comments/Comments";
import { useParams } from "react-router-dom";
import { loadCommentsData, selectComments, commentsAreLoading } from "../comments/commentsSlice";
import SubredditSideBar from "../../Components/SubredditSideBar";
import ROUTES from "../../App/ROUTES";


export const Profile = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfile);
    const isLoading = useSelector(profileIsLoading);
    let { user_id } = useParams();

    const homePageData = useSelector(selectComments);
    const homePageLoading = useSelector(commentsAreLoading);
    let url = ROUTES.reddit_url_json

    useEffect(() => {
        dispatch(loadProfile(user_id));
        dispatch(loadCommentsData(url));
    }, [dispatch, user_id, url])


    if (isLoading || homePageLoading) {
        return <div className="load-profile">Loading data...</div>
    };
    
    return (
        <div className='threads'>
            <section className="sidebar-thread">
                <SubredditSideBar allData={homePageData} />
            </section>
            <section className="comments-thread">
                <h1>{`Contributor: ${user_id}`}</h1>
                <Comments allData={profileData}/>
            </section>
        </div>
    );    
};

