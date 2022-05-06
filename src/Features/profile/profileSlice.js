import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadProfile = createAsyncThunk(
    'profile/loadProfile',
    async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      return json;
    }
  );

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
      profile: [],
      isLoadingProfile: false,
      hasError: false
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadProfile.pending, (state) => {
          state.isLoadingProfile = true;
          state.hasError = false;
        })
        .addCase(loadProfile.fulfilled, (state, action) => {
          state.isLoadingProfile = false;
          state.profile = action.payload.data.children;
        })
        .addCase(loadProfile.rejected, (state, action) => {
          state.isLoadingProfile = false;
          state.hasError = true;
          state.profile = [];
        })
    },
  });
  
  export const selectProfile = (state) => state.profile.profile;
  export const profileIsLoading = (state) => state.profile.isLoadingProfile;
  export default profileSlice.reducer;  
