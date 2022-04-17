import { createSlice } from "@reduxjs/toolkit";
import {
  signup,
  login,
  authorize,
  resetPassword,
  forgotPassword,
  logout,
} from "../actions/auth";

const initialState = {
  value: {
    auth: false,
    user: "",
  },
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(authorize.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.value = action.value;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { Authorize, Login, Logout } = userSlice.actions;

export const getUser = (state) => state.user.value;

export default userSlice.reducer;
