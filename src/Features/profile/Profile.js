import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, profileIsLoading, loadProfile } from "./profileSlice";
// import Comment from "../../Components/Global/Comment";
import { useParams } from "react-router-dom";

export const Profile = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectProfile);
    const isLoading = useSelector(profileIsLoading);
    let { id } = useParams();

    useEffect(() => {
        dispatch(loadProfile(id));
    }, [dispatch])


    if (isLoading) {
        return <div>Loading profile data...</div>
    };
    
    return (
        <>
            <h1>{id}</h1>
            
        </>
    )
};

