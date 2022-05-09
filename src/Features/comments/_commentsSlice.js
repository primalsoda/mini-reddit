import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ROUTES from "../../App/ROUTES";

export const loadCommentsData = createAsyncThunk(
    'data/loadCommentsData',
    async () => {
      const data = await fetch(ROUTES.reddit_url_json);
      const json = await data.json();
      return json;
    }
  );


const _commentsSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        isLoadingNow: false,
        hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadCommentsData.pending, (state) => {
          state.isLoadingNow = true;
          state.hasError = false;
        })
        .addCase(loadCommentsData.fulfilled, (state, action) => {
          state.isLoadingNow = false;
          state.data = action.payload.data.children;
        })
        .addCase(loadCommentsData.rejected, (state, action) => {
          state.isLoadingNow = false;
          state.hasError = true;
          state.data = [];
        })
    },
  });
  
  export const selectComments = (state) => state.allData.data;
  export const commentsAreLoading = (state) => state.allData.isLoadingNow;

  export default _commentsSlice.reducer;
