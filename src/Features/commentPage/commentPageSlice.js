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
      comment: {},
      discussion: [],
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
          state.comment = action.payload[0].data.children[0].data;
          state.discussion = action.payload[1].data.children;
        })
        .addCase(loadComment.rejected, (state) => {
          state.isLoadingComment = false;
          state.hasError = true;
          state.comment = [];
          state.discussion = [];
        })
    },
  });
  
  export const selectComment = (state) => state.commentPage.comment;
  export const selectCommentDiscussion = (state) => state.commentPage.discussion;
  export const commentIsLoading = (state) => state.commentPage.isLoadingComment;

  export default commentPageSlice.reducer;  