//import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import commentPageSlice from "../Features/commentPage/commentPageSlice";
import profileSlice from "../Features/profile/profileSlice";
import subredditSlice from "../Features/subreddit/subredditSlice";
import commentsSlice from "../Features/comments/commentsSlice";
import _commentsSlice from "../Features/comments/_commentsSlice";

const store = configureStore({
    reducer: {
        comments: commentsSlice,
        commentsPage: commentPageSlice,
        _comments: _commentsSlice,
        profile: profileSlice,
        subreddit: subredditSlice,
    }
});

export default store;