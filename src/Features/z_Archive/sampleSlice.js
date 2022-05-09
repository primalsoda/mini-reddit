import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ROUTES from "../../App/ROUTES";

export const loadMainPageData = createAsyncThunk(
    'allData/loadMainPageData',
    async () => {
      const data = await fetch(ROUTES.reddit_url_json);
      const json = await data.json();
      return json;
    }
  );

  export const loadProfileData = createAsyncThunk(
    'allData/loadProfileData',
    async () => {
      const data = await fetch(ROUTES.reddit_url_json); // FIX FETCH URL ------------
      const json = await data.json();
      return json;
    }
  ); 
  
  export const loadSubredditData = createAsyncThunk(
    'allData/loadSubredditData',
    async () => {
      const data = await fetch(ROUTES.reddit_url_json); // FIX FETCH URL ------------
      const json = await data.json();
      return json;
    }
  ); 


const allDataSlice = createSlice({
    name: 'allData',
    initialState: {
        comments: [],
        profile: [],
        subreddit: [],
        isLoadingNow: false,
        hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadMainPageData.pending, (state) => {
          state.isLoadingNow = true;
          state.hasError = false;
        })
        .addCase(loadMainPageData.fulfilled, (state, action) => {
          state.isLoadingNow = false;
          state.comments = action.payload.data.children;
        })
        .addCase(loadMainPageData.rejected, (state, action) => {
          state.isLoadingNow = false;
          state.hasError = true;
          state.comments = [];
        })



        .addCase(loadProfileData.pending, (state) => {
            state.isLoadingNow = true;
            state.hasError = false;
        })
        .addCase(loadProfileData.fulfilled, (state, action) => {
            state.isLoadingNow = false;
            state.profile = action.payload.data.children;
        })
        .addCase(loadProfileData.rejected, (state, action) => {
            state.isLoadingNow = false;
            state.hasError = true;
            state.profile = [];
        })



        .addCase(loadSubredditData.pending, (state) => {
            state.isLoadingNow = true;
            state.hasError = false;
        })
        .addCase(loadSubredditData.fulfilled, (state, action) => {
            state.isLoadingNow = false;
            state.subreddit = action.payload.data.children;
        })
        .addCase(loadSubredditData.rejected, (state, action) => {
            state.isLoadingNow = false;
            state.hasError = true;
            state.subreddit = [];
        })        
        
        
    },
  });
  
  export const selectMainPageData = (state) => state.allData.comments;
  export const selectProfileData = (state) => state.allData.profile;
  export const selectSubredditData = (state) => state.allData.subreddit;

  export const dataIsLoading = (state) => state.allData.isLoadingNow;

  export default allDataSlice.reducer;
