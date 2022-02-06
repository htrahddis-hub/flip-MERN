const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UserModel = require('../../model/userAuth');
const { totp } =require('otplib');
const nodemailer = require("nodemailer");
var CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');
require('dotenv').config();
totp.options = { 
  digits: 6,
  step: 300
};
const router = express.Router();

router.post('/signup', function(req, res, next) {
  passport.authenticate('signup', async (err, user, info) => {
    if (err) { return next(err);}
    //console.log(req);
    res.status(200).json({
      message: 'Signup successful',
      email: user.email
    });
  })(req, res, next);
});


router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            console.log(info.message);
            return res.status(401).json(info);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              
              if (error) {
                return next(error);
              }
              const body = { email: user.email, token: user.validApi};
              return res.json({ body});
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

router.post('/fpwd',async (req,res,next)=>{
  try{
    const { email } = req.body;
    const user = await UserModel.findOne({ email }).lean();

    if (!user) {
      return res.status(550).json({ message: 'This email ID is not registered'});
    }
    const token = totp.generate(process.env.SECRET);
    const html = `
      <h3>Hello , </h3>
      <p>Here is your OTP for resetting password of account ${email}.</p>
      <p>Reset Link: ${token}</p>
      <br/>
      <p> If you didn't request this, please change your password, and check your account activity.</p>
      <p>Thank You</p>
      `

    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'siddharthecomapp@gmail.com',
        pass: process.env.PASS
        }
      });
        
    let mailDetails = {
        from: 'no-reply siddharthecomapp@gmail.com',
        to: email,
        subject: 'Password Change',
        html: html 
      };
        
    await mailTransporter.sendMail(mailDetails);

    return res.status(200).json({ message: "OTP is send"});
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

router.post('/rpwd', async(req,res,next)=>{
  try{
    const {otp,password,email}=req.body;
    if(otp){
      const isValid = totp.check(otp, process.env.SECRET);
      console.log(isValid);
      if(isValid){
        const user = await UserModel.findOne({ email });
        if (!user) return res.json({ message: 'invalid email ID'});
        user.password = password;
        await user.save();
        return res.status(200).json({message:"verfied"});
      }
    return res.status(401).json({message:"not verified"});
    }
    return res.status(401).json({message:"no OTP"});
  } catch(error){
    return next(error);
  }
});

router.post('/verify', async (req,res,next)=>{
  try{
    const {secret_token}=req.body;

    var bytes  = CryptoJS.AES.decrypt(secret_token, process.env.SECRET_KEY);
    var token = bytes.toString(CryptoJS.enc.Utf8);

    var decoded = jwt.verify(token, process.env.TOP_SECRET);

    if(decoded){
      res.json({
        message: 'ok',
        user: decoded.user.email,
      });
    }
    else res.json({message:"invalid-token"});
  }catch(error){
    res.status(500).json({message:"invalid token",error:error});
  }
});



module.exports = router;