import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./user";
import productReducer from "./product"

export const store = configureStore({
	reducer:{
		user:userReducer,
		products:productReducer
	}
});