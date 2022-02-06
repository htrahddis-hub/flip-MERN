const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../../model/userAuth');
require('dotenv').config();
var CryptoJS = require("crypto-js");
const router = express.Router();


router.get('/products',(req,res,next)=>{
  try{
    const {token}=req.body;
    var decoded = jwt.verify(token, process.env.TOP_SECRET);
    if(decoded){
      res.json({
        message:"correct token"
      });
    }
    else res.json({message:"invalid token"});
  } catch(error){
    next(error);
  }
});

module.exports = router;