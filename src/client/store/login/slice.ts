import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LoginPageState } from "../../types/index";
import errorHandler from "../../utils/error-handler";

interface ILoginDataConditions {
  userName: string;
  password: string;
}
const initialState: LoginPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const getUserDetails = createAsyncThunk(
  "login/user",
  async (data: LoginPageState) => {
    // try {
    //   const response = await userLoginService(credentials);
    //   console.log(response);
    //   return response;
    // } catch (_error: any) {
    //   const errorMessage = errorHandler(_error);
    //   throw new Error(errorMessage);
    // }
    if (data.error) {
      throw new Error(data.error);
    }
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
