import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, profileIsLoading, loadProfile } from "./profileSlice";
import Comments from "../comments/Comments";
import { useParams } from "react-router-dom";

//import SubredditSideBar from "../../Components/SubredditSideBar";
//import { selectComments, commentsAreLoading, loadCommentsData } from "../comments/commentsSlice";
//import ROUTES from "../App/ROUTES";
//import HomePageCategoryBox from "../../Components/HomePageCategoryBox";

export const Profile = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfile);
    const isLoading = useSelector(profileIsLoading);
    let { user_id } = useParams();

    useEffect(() => {
        dispatch(loadProfile(user_id));
    }, [dispatch, user_id])


    if (isLoading) {
        return <div className="load-profile">Loading data...</div>
    };
    
    return (
        <div className='threads'>
            <section className="sidebar-thread">
                <span></span>
            </section>
            <section className="comments-thread">
                <h1>{`Contributor: ${user_id}`}</h1>
                <Comments allData={profileData}/>
            </section>
        </div>
    );    
};

