//import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../Features/comments/commentsSlice";
import subredditSlice from "../Features/subreddit/subredditSlice";

const store = configureStore({
    reducer: {
        comments: commentsSlice,
        subreddit: subredditSlice,
    }
});

export default store;