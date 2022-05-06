import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, profileIsLoading, loadProfile } from "./profileSlice";
import Comment from "../../Components/Global/Comment";

export const Profile = (url) => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfile);
    const isLoading = useSelector(profileIsLoading);

    useEffect(() => {
        dispatch(loadProfile(url));
    }, [dispatch])


    if (isLoading) {
        return <div>Loading profile data...</div>
    };
    
    return (
        <Comment />
    )
};