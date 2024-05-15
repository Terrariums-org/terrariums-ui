import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { initialStateAuth } from "./state/initialState";
import { ReduxSliceName } from "../entities";
import {
  setAuthReducerFulfilled,
  setAuthReducerRejected,
  logoutReducer,
} from "./reducers";
import { loginUserAsync, registerUserAsync } from "./thunks";

export const authSlice = createSlice({
  name: ReduxSliceName.AUTH,
  initialState: initialStateAuth,
  reducers: {
    logout: logoutReducer,
  },
  extraReducers: (
    builder: ActionReducerMapBuilder<typeof initialStateAuth>
  ) => {
    //login

    builder.addCase(loginUserAsync.fulfilled, setAuthReducerFulfilled);
    builder.addCase(loginUserAsync.rejected, setAuthReducerRejected);
    //register
    builder.addCase(registerUserAsync.fulfilled, setAuthReducerFulfilled);
    builder.addCase(registerUserAsync.rejected, setAuthReducerRejected);
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
