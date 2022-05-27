import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:5000/user/";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    try {
      const product = await axios()
    } catch (err) {

    }
  }
);
