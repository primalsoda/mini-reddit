import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const loadComment = createAsyncThunk(
    'comment/loadComment',
    async (url) => {
      const data = await fetch(url);
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
          state.comment = action.payload.data.children;
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