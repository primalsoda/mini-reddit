import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const reddit_url = 'https://www.reddit.com/.json';

export const loadAllComments = createAsyncThunk(
    'allComments/loadAllComments',
    async () => {
      const data = await fetch(reddit_url);
      const json = await data.json();
      return json;
    }
  );

export const commentsSlice = createSlice({
    name: 'allComments',
    initialState: {
      comments: [],
      isLoadingComments: false,
      hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadAllComments.pending, (state) => {
          state.isLoadingComments = true;
          state.hasError = false;
        })
        .addCase(loadAllComments.fulfilled, (state, action) => {
          state.isLoadingComments = false;
          state.comments = action.payload.data.children;
        })
        .addCase(loadAllComments.rejected, (state, action) => {
          state.isLoadingComments = false;
          state.hasError = true;
          state.comments = [];
        })
    },
  });
  
  export const selectComments = (state) => state.comments.comments;
  export const commentsAreLoading = (state) => state.comments.isLoadingComments;
  export default commentsSlice.reducer;  
