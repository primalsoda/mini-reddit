import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import ROUTES from "../../App/ROUTES";

export const loadComment = createAsyncThunk(
    'comment/loadComment',
    async ({subreddit, id, title}) => {
      const comment_url_json = `${ROUTES.reddit_url}/r/${subreddit}/comments/${id}/${title}/.json`;
      const data = await fetch(comment_url_json);
      const json = await data.json();
      return json;
    }
  );

export const commentPageSlice = createSlice({
    name: 'comment',
    initialState: {
      comment: [],
      isLoadingComment: false,
      hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadComment.pending, (state) => {
          state.isLoadingComment = true;
          state.hasError = false;
        })
        .addCase(loadComment.fulfilled, (state, action) => {
          state.isLoadingComment = false;
          state.comment = action.payload[0].data.children[0];
        })
        .addCase(loadComment.rejected, (state, action) => {
          state.isLoadingComment = false;
          state.hasError = true;
          state.comment = [];
        })
    },
  });
  
  export const selectComment = (state) => state.comment.comment;
  export const commentIsLoading = (state) => state.comment.isLoadingComment;
  export default commentPageSlice.reducer;  