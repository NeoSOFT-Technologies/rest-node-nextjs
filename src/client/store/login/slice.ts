import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LoginPageState } from "../../types/index";



const initialState: LoginPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const getUserDetails = createAsyncThunk(
  "login/user",
  async (data: LoginPageState) => {
 
    if (data.error) {
      throw new Error(data.error);
    }
    console.log(data.data)
    return data.data;
  }
);

const slice = createSlice({
  name: "user-login",
  initialState,
  reducers: {


  },
  extraReducers(builder): void {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      
      state.data = action.payload;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});

export default slice.reducer;
