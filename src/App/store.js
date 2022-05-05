//import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../Features/comments/commentsSlice";

const store = configureStore({
    reducer: {
        comments: commentsSlice,
    }
});

export default store;