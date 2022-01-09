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

router.post('/get-token', async (req,res,next)=>{
  try{
    const {secret_token}=req.body;

    var bytes  = CryptoJS.AES.decrypt(secret_token, process.env.SECRET_KEY);
    var token = bytes.toString(CryptoJS.enc.Utf8);

    var decoded = jwt.verify(token, process.env.TOP_SECRET);

    if(decoded){
      const token = jwt.sign({ user: decoded.user }, process.env.TOP_SECRET, {
        expiresIn: "600s"});
      res.json({
        message: 'You made it to the secure route',
        user: decoded.user.email,
        token: token
      });
    }
    else res.json({message:"invalid-token"});
  }catch(error){
    //console.log(error);
    res.status(500).json({message:"invalid token",error:error});
  }
});

router.get('/products',(req,res,next)=>{
  try{
    const {token}=req.body;
    var decoded = jwt.verify(token, process.env.TOP_SECRET);
    if(decoded){
      //const user=new UserModel.findOne()
      res.json({
        message:"correct token"
      });
    }
    else res.json({message:"invalid token"});
  } catch(error){
    next(error);
  }
})

module.exports = router;