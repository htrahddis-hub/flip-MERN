import { LOGIN, AUTHORIZE, SIGNUP, FORGOTPASSWORD, RESETPASSWORD } from "../constants/actionTypes";

const userReducer = (user = {},action) => {
	switch(action.type){
		case LOGIN:
        case AUTHORIZE:
            return action.payload;
		case SIGNUP:
		case FORGOTPASSWORD:
		case RESETPASSWORD:
		    return user;
		default:
		    return user;
	}
}

export default userReducer;