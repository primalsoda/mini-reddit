import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ROUTES from "../../App/ROUTES";

export const loadSubreddit = createAsyncThunk(
    'subreddit/loadSubreddit',
    async (subreddit) => {
      const subreddit_url = `${ROUTES.reddit_url}/r/${subreddit}/.json`;

      try {
        const data = await fetch(subreddit_url);
        const json = await data.json();
        return json.data.children;
      } catch(e) {
        console.log(e);
        return [];
      }

    }
  );

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
      subreddit: [],
      isLoadingSubreddit: false,
      hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadSubreddit.pending, (state) => {
          state.isLoadingSubreddit = true;
          state.hasError = false;
        })
        .addCase(loadSubreddit.fulfilled, (state, action) => {
          state.isLoadingSubreddit = false;
          state.subreddit = action.payload;
        })
        .addCase(loadSubreddit.rejected, (state, action) => {
          state.isLoadingSubreddit = false;
          state.hasError = true;
          state.subreddit = [];
        })
    },
  });
  
  export const selectSubreddit = (state) => state.subreddit.subreddit;
  export const subredditIsLoading = (state) => state.subreddit.isLoadingSubreddit;
  export default subredditSlice.reducer;  
