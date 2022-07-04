import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  updateUserDataService} from "../../services/login";
import { IUserDetail } from "../../types/index";
import errorHandler from "../../utils/error-handler";

export interface IUpdateUserState {
  isUpdated: boolean;
  loading: boolean;
  error?: any;
}

const initialState: IUpdateUserState = {
  isUpdated: false,
  loading: false,
  error: undefined,
};

export const updateUser = createAsyncThunk(
  "User/update",
  async (data: IUserDetail) => {
    try {
      const response = await  updateUserDataService(data);
      return response.data;
    } catch (_error: any) {
      const errorMessage = errorHandler(_error);
      throw new Error(errorMessage);
    }
  }
);

const slice = createSlice({
  name: "UserUpdate",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.isUpdated = false;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.loading = false;
      state.isUpdated = true;
    });
    builder.addCase(updateUser.rejected, (state, action: any) => {
      state.loading = false;
      state.isUpdated = false;
      const errorMessage = JSON.parse(action.error.message);
      state.error = errorMessage;
    });
  },
});

export default slice.reducer;

