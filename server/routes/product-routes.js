const express = require('express');
const jwt = require('jsonwebtoken');
const ProductModel = require('../model/product');
require('dotenv').config();
var CryptoJS = require("crypto-js");
const router = express.Router();

async function auth (req,res,next){
  try{
    const {secret_token}=req.body;

    var bytes  = CryptoJS.AES.decrypt(secret_token, process.env.SECRET_KEY);
    var token = bytes.toString(CryptoJS.enc.Utf8);

    var decoded = jwt.verify(token, process.env.TOP_SECRET);

    if(decoded){
      req.body.email= decoded.user.email;
      next();
    }
    else res.status(401).json({message:"Unauth"});
  }catch(error){
    console.log(error);
    res.status(401).json({message:"Unauthorized",error:error});
  }
}

router.post('/products/:bat',auth,async(req,res,next)=>{
  try{
    const query =req.query;
    console.log(query);
    const product= await ProductModel.find().lean();
    const filteredProduct=product.filter((item,idx)=>{
      return idx>=(query.batch-1)*query.batchsize&&idx<=(query.batch*query.batchsize-1)
    })
    res.json({
      message: 'ok',
      user: req.body.email,
      product:filteredProduct
      });
  }catch(error){
    res.status(401).json({message:"invalid token",error:error});
  }
});

router.post('/addProduct',auth,async(req,res,next)=>{
  try{
    let {product} = req.body;
    product['author']=req.body.email;
    console.log(product.name);
    const newProduct = new ProductModel(product);
    await newProduct.save();
    res.send(newProduct);
  }
  catch(error){
    console.log(error);
  }
});

module.exports = router;