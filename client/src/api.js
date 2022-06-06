import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { Authorize, Login, Logout, getUser } from "./reducers/user";

// const url = "http://localhost:5000/auth/";
const url="https://data-and-auth-api.herokuapp.com/auth/";
const url2="https://data-and-auth-api.herokuapp.com/user/";

export const signup = async (user) => {
  try {
    const { data } = await axios.post(url + "signup", user);
    if (data.message === "Signup successful") return "ok";
  } catch (err) {
    console.log(err.response);
    return "not ok";
  }
};

export const login = async (user) => {
  try {
    const { data } = await axios.post(url + "login", user);
    const token = data.body.token;
    const d = new Date();
    d.setTime(d.getTime() + 20 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = `token=${token}; ${expires}; path=/;`;
    return "ok";
  } catch (err) {
    return err.response.data.message;
  }
};

export const authorize = async () => {
  try {
    let token = decodeURIComponent(document.cookie);
    token = { secret_token: token.substring(6) };
    const { data } = await axios.post(url + "verify", token);
    if (data.message === "ok") return "ok";
    else return "not ok";
  } catch (err) {
    return err.response.data.message;
  }
};

export const logout = async () => {
  try {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  } catch (err) {
    console.log(err);
  }
};

export const forgotPassword = async (user) => {
  try {
    const data = await axios.post(url + "fpwd", user);
    return data.data.message;
  } catch (err) {
    return err.response.data.message;
  }
};

export const resetPassword = async (user) => {
  try {
    const data = await axios.post(url + "rpwd", user);
    return data.data.message;
  } catch (err) {
    return err.response.data.message;
  }
};

export const getProduct =async()=>{
  try{
    let token = decodeURIComponent(document.cookie);
    token = { secret_token: token.substring(6) };
    const product = await axios.post(url2+"products",token);
    //console.log(product);
    return product.data.product;
  } catch(err){
    return err.response.data.message;
  }
}
