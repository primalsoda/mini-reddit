import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ROUTES from "../../App/ROUTES";

export const loadHomePageData = createAsyncThunk(
    'allHomePageData/loadAllData',
    async () => {
      const data = await fetch(ROUTES.reddit_url_json);
      const json = await data.json();
      return json;
    }
  );

export const subredditSideBarSlice = createSlice({
    name: 'allHomePageData',
    initialState: {
      data: [],
      isLoadingData: false,
      hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadHomePageData.pending, (state) => {
          state.isLoadingData = true;
          state.hasError = false;
        })
        .addCase(loadHomePageData.fulfilled, (state, action) => {
          state.isLoadingData = false;
          state.data = action.payload.data.children;
        })
        .addCase(loadHomePageData.rejected, (state, action) => {
          state.isLoadingData = false;
          state.hasError = true;
          state.data = [];
        })
    },
  });
  
  export const selectData = (state) => state.homepageData.data;
  export const dataIsLoading = (state) => state.homepageData.isLoadingData;
  export default subredditSideBarSlice.reducer;  
