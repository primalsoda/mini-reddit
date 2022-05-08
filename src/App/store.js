//import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../Features/comments/commentsSlice";
import subredditSlice from "../Features/subreddit/subredditSlice";
import profileSlice from "../Features/profile/profileSlice";
import commentPageSlice from "../Features/commentPage/commentPageSlice";
import subredditSideBarSlice from "../Features/subredditSideBar/subredditSideBarSlice";

const store = configureStore({
    reducer: {
        comments: commentsSlice,
        subreddit: subredditSlice,
        profile: profileSlice,
        comment: commentPageSlice,
        homepageData: subredditSideBarSlice,
        //
    }
});

export default store;