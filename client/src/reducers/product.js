import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
		products:[]
  },
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    Fetch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Fetch } = productSlice.actions;

export const getProducts = (state) => state.user.value;

export default productSlice.reducer;
