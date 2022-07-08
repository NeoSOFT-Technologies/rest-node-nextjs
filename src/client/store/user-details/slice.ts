import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserDataService } from "../../services/login";
import { IUserDetail } from "../../types/index";
import errorHandler from "../../utils/error-handler";

export interface IuserDetailState {
  data?:IUserDetail;
  loading: boolean;
  error?: any;
}

const initialState: IuserDetailState = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const userDetails = createAsyncThunk(
  "user/details",
  async (userName: string) => {
    try {
      const response = await getUserDataService(userName);
      return response.data;
    } catch (_error: any) {
      const errorMessage = errorHandler(_error);
      throw new Error(errorMessage);
    }
  }
);

const slice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    // resetuserDetails: (state) => {
    //   state.data = undefined;
    //   state.loading = false;
    //   state.error = undefined;
    // },
  },
  extraReducers(builder): void {
    builder.addCase(userDetails.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(userDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(userDetails.rejected, (state, action: any) => {
      state.data = undefined;
      state.loading = false;
      const errorMessage = JSON.parse(action.error.message);
      state.error = errorMessage;
    });
  },
});

export default slice.reducer;
//export const { resetuserDetails } = slice.actions;