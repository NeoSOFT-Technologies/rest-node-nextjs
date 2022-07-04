import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewUserService } from "../../services/login";
import { IRegisterData } from "../../types";
import errorHandler from "../../utils/error-handler";

interface IAddUserState {
  userAdded?: boolean;
  loading: boolean;
  error?: string | null;
}
const initialState: IAddUserState = {
  userAdded: false,
  loading: false,
  error: undefined,
};

export const addNewUser = createAsyncThunk(
  "register/user",
  async (conditions: IRegisterData) => {
    try {
      const response = await createNewUserService(conditions);
      console.log(response.data);
      return response.data;
    } catch (_error: any) {
      // console.log(_error);
      const errorMessage = errorHandler(_error);
      throw new Error(errorMessage);
    }
  }
);

const slice = createSlice({
  name: "user-register",
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder.addCase(addNewUser.pending, (state) => {
      state.loading = true;
      state.userAdded = false;
      state.error = undefined;
    });
    builder.addCase(addNewUser.fulfilled, (state) => {
      state.loading = false;
      state.userAdded = true;
    });
    builder.addCase(addNewUser.rejected, (state, action: any) => {
      state.loading = false;
      const errorMessage = JSON.parse(action.error.message);
      state.error = errorMessage;
    });
  },
});

export default slice.reducer;
