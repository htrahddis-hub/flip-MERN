import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    Authorize: (state, action) => {
      state.value = action.payload;
    },
    Login: (state, action) => {
      state.value = action.payload;
    },
    Logout: (state) => {
      state.value = {
        auth: false,
        user: "",
      };
    },
  },
});

export const { Authorize, Login, Logout } = userSlice.actions;

export const getUser = (state) => state.user.value;

export default userSlice.reducer;
