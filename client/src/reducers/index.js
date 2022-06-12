import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import productReducer from "./product";
import cartReducer from "./cart";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
		cart:cartReducer
  },
});
