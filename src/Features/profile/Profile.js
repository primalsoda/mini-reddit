import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, profileIsLoading, loadProfile } from "./profileSlice";
// import Comment from "../../Components/Global/Comment";
import { useParams } from "react-router-dom";

export const Profile = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfile);
    const isLoading = useSelector(profileIsLoading);
    let { user_id } = useParams();

    useEffect(() => {
        dispatch(loadProfile(user_id));
    }, [dispatch])


    if (isLoading) {
        return <div className="load-profile">Loading profile data...</div>
    };
    
    return (
        <>
            <h1>{user_id}</h1>
            
        </>
    )
};

