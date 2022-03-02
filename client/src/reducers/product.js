import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

const postReducer = (posts = [],action) => {
	switch(action.type){
		case DELETE:
		    return posts.filter((post) => post._id !== action.payload);
		case UPDATE:
		case LIKE:
		    return posts.map((post) => post._id === action.payload._id ? action.payload : post);
		case FETCH_ALL:
			return action.payload.reverse();
		case CREATE:
			return [action.payload, ...posts];
		default:
		    return posts;
	}
}

export default postReducer;