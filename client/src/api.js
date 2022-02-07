import axios from 'axios';

const url="https://data-and-auth-api.herokuapp.com/auth/";


export const signup= async(user)=>{
	try{
		const {data}=await axios.post(url+'signup',user);
		console.log(data);
		if(data.message=="Signup successful")
			return 'ok';
	}
	catch(err){
		console.log(err.response);
		return 'not ok';
	}
}

export const login= async(user)=>{
	try{
		const {data}=await axios.post(url+'login',user);
		const token =data.body.token;
		const d = new Date();
		d.setTime(d.getTime() + (20*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = `token=${token}; ${expires}; path=/;`;
		return "ok";
	}
	catch(err){
		return err.response.data.message;
	}
  	
}

export const authorize= async()=>{
	try{
		let token=decodeURIComponent(document.cookie);
    console.log(token);
		token={secret_token: token.substring(6)};
		const {data}=await axios.post(url+'verify',token);
		if(data.message==='ok')
			return 'ok';
		else
			return 'not ok';
	}
	catch(err){
		return err.response.data.message;
	}
}

export const logout= async()=>{
	try{
		document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	}
	catch(err){
		console.log(err);
	}
}
