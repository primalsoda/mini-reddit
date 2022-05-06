import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadSubreddit = createAsyncThunk(
    'subreddit/loadSubreddit',
    async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      return json;
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
          state.subreddit = action.payload.data.children;
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
