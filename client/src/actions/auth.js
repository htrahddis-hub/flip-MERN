import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:5000/auth/";

export const signup = createAsyncThunk("user/signup", async (user) => {
  try {
    const { data } = await axios.post(url + "signup", user);
    if (data.message === "Signup successful")
      return { auth: false, user: data.email };
  } catch (err) {
    console.log(err.response);
    return { auth: false, user: "" };
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
    return { auth: true, user: data.email };
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
    return { auth: false, message: err.response.data.message };
  }
});

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (user) => {
    try {
      const data = await axios.post(url + "fpwd", user);
      return { auth: false, message: data.data.message };
    } catch (err) {
      return { auth: false, message: err.response.data.message };
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (user) => {
    try {
      const data = await axios.post(url + "rpwd", user);
      return { auth: true, message: data.data.message };
    } catch (err) {
      return { auth: true, message: err.response.data.message };
    }
  }
);
