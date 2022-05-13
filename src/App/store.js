//import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import commentPageSlice from "../Features/commentPage/commentPageSlice";
import profileSlice from "../Features/profile/profileSlice";
import subredditSlice from "../Features/subreddit/subredditSlice";
import _commentsSlice from "../Features/comments/_commentsSlice";

const store = configureStore({
    reducer: {
        commentPage: commentPageSlice,
        _comments: _commentsSlice,
        profile: profileSlice,
        subreddit: subredditSlice,
    }
});

export default store;