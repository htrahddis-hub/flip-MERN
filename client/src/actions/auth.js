import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://data-and-auth-api.herokuapp.com/auth/";

export const signup = createAsyncThunk("user/signup", async (user) => {
  try {
    const { data } = await axios.post(url + "signup", user);
    if (data.message === "Signup successful")
      return { isSignedin: true, user: data.email, message: "" };
  } catch (err) {
    console.log(err.response);
    return {
      isSignedin: false,
      user: err.response.data.error.keyValue.email,
      message: "This E-mail id is already registered",
    };
  }
});

export const login = createAsyncThunk("user/login", async (user) => {
  try {
    const { data } = await axios.post(url + "login", user);
    const token = data.body.token;
    const d = new Date();
    d.setTime(d.getTime() + 20 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = `token=${token}; ${expires}; path=/;`;
    return { auth: true, user: data.body.email, message: "" };
  } catch (err) {
    return { auth: false, message: err.response.data.message };
  }
});

export const authorize = createAsyncThunk("user/authorize", async () => {
  try {
    let token = decodeURIComponent(document.cookie);
    token = { secret_token: token.substring(6) };
    const { data } = await axios.post(url + "verify", token);
    if (data.message === "ok") return { auth: true, user: data.user };
    else return { auth: false, user: "" };
  } catch (err) {
    return { auth: false };
  }
});

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (user) => {
    try {
      const data = await axios.post(url + "fpwd", user);
      return { auth: false, message: data.data.message ,otpSend:true};
    } catch (err) {
      return { auth: false, message: err.response.data.message,otpSend:false };
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (user) => {
    try {
      const data = await axios.post(url + "rpwd", user);
      return { auth: true, message: data.data.message,isReset:true };
    } catch (err) {
      return { auth: true, message: err.response.data.message,isReset:false };
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  try {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    return { auth: false, user: "" };
  } catch (err) {
    console.log(err);
  }
});
