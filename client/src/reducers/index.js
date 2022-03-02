import { combineReducers } from "redux";
import products from "./product";
import user from "./user";

export default combineReducers({
	products,
	user
});