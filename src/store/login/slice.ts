import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { validateUserLoginCredentials } from "../../services/login";
import { LoginData, LoginPageState } from "../../types/index";
import error from "../../utils/error";
interface ILoginDataConditions {
  username: string;
  password: string;
}
const initialState: LoginPageState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const getUserDetails = createAsyncThunk(
  "login/user",
  async (credentials: ILoginDataConditions) => {
    try {
      const response = await validateUserLoginCredentials(credentials);
      console.log(response);
      return response;
    } catch (_error) {
      throw new Error(error(_error));
    }
  }
);

const slice = createSlice({
  name: "user-login",
  initialState,
  reducers: {
    resetUserLogin: (state) => {
      state.loading = false;
      state.data = undefined;
      state.error = undefined;
      localStorage.clear();
    },
  },
  extraReducers(builder): void {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
      state.data = undefined;
      state.error = undefined;
    });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("username", JSON.stringify(action.payload.username));
      state.data = action.payload as LoginData;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});
export const { resetUserLogin } = slice.actions;
export default slice.reducer;
