import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../actions/product";

const initialState = {
  value: {
    product: [],
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
    addReview: (state, action) => {
      const item = state.value.find(
        (item) => item.id === action.payload.product.id
      );
      const newCart = state.value.filter(
        (item) => item.id !== action.payload.product.id
      );
      if (item.review) {
        item.review.push(action.payload.review);
        state.value = [...newCart, item];
        state.value = state.value.sort((a, b) => a.id - b.id);
      } else {
        state.value = [
          ...newCart,
          { ...action.payload.product, review: [action.payload.review] },
        ];
        state.value = state.value.sort((a, b) => a.id - b.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = action.payload;
      state.value.product = state.value.product.map((item, idx) => {
        return { ...item, idx };
      });
    });
  },
});

export const { Fetch, addReview } = productSlice.actions;

export const selectProducts = (state) => state.products.value;

export default productSlice.reducer;
