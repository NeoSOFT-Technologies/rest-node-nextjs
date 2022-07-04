import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "./login/slice";
import addNewUserReducer from "./register/slice";
import updateUserReducer from "./update/slice";
import deleteUserReducer from "./delete/slice"
const store = configureStore({
  reducer: {
    login: loginReducer,
    addNewUserState: addNewUserReducer,
    updateUserState:updateUserReducer,
    deleteUserState:deleteUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
