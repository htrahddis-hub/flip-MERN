import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://data-and-auth-api.herokuapp.com/user/";
// const url = "http://localhost:5000/user/";
const getToken = () => {
  let token = decodeURIComponent(document.cookie);
  token = { secret_token: token.substring(6) };
  return token;
};

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const product = await axios.post(url + "products", getToken());
    return { product: product.data.product};
  } catch (err) {
    console.log(err);
  }
});

// export const addProduct = createAsyncThunk(
//   "product/addProduct",
//   async (product) => {
//     try {
//       const product = await axios();
//     } catch (err) {}
//   }
// );

// export const getProductLegacy = async () => {
//   try {
//     const product = await axios.post(url2 + "products", token);
//     //console.log(product);
//     return product.data.product;
//   } catch (err) {
//     return err.response.data.message;
//   }
// };
