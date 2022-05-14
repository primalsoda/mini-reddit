import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ROUTES from "../../App/ROUTES";

export const loadSubreddit = createAsyncThunk(
    'subreddit/loadSubreddit',
    async (subreddit) => {
      const subreddit_url = `${ROUTES.reddit_url}/r/${subreddit}/.json`;

      /*
      if (subreddit.includes(' ')) {
        const first_term = subreddit.substring(0, subreddit.indexOf(' '));
        const second_term = subreddit.substring(subreddit.indexOf(' ') + 1);
        const first_url = `${ROUTES.reddit_url}/r/${first_term}/.json`;
        const second_url = `${ROUTES.reddit_url}/r/${second_term}/.json`;

        const data_one = await fetch(first_url);
        const data_two = await fetch(second_url);
        const json_one = await data_one.json();
        const json_two = await data_two.json();

        let full_data_set = json_one.data.children.concat(json_two.data.children);
        return full_data_set;

      } else {
        const data = await fetch(subreddit_url);
        const json = await data.json();
        return json.data.children;
      };
      */
      const data = await fetch(subreddit_url);
      const json = await data.json();
      return json.data.children;

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
