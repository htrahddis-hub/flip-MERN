const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../../model/userAuth');
require('dotenv').config();
var CryptoJS = require("crypto-js");
const router = express.Router();
// router.get(
//   '/profile',
//   (req, res, next) => {
//     passport.authenticate('jwt',(err,user,info)=>{
//       if (err) { return next(err);}
//       var decoded = jwt.verify(req.query.secret_token, process.env.TOP_SECRET);
//       console.log(decoded);
//       res.json({
//         message: 'You made it to the secure route',
//         user: {...req.user, password:null},
//         token: req.query.secret_token
//       })
//     })(req, res, next);
//   }
// );

router.get('/profile',(req,res,next)=>{
  try{
    const {secret_token}=req.body;

    var bytes  = CryptoJS.AES.decrypt(secret_token, process.env.SECRET_KEY);
    var token = bytes.toString(CryptoJS.enc.Utf8);

    var decoded = jwt.verify(token, process.env.TOP_SECRET);

    if(decoded){
      res.json({
        message: 'You made it to the secure route',
        user: decoded.user.email,
        token: secret_token
      });
    }
    else res.json({message:"invalid-token"});
  }catch(error){
    //console.log(error);
    next(error);
  }
});

router.get('/products',(req,res,next)=>{
  res.json({
    products:"we don't haveproducts"
  })
})

module.exports = router;