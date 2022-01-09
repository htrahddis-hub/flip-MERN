const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/userAuth');
// const JWTstrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;
var AES = require("crypto-js/aes");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, pwd, done) => {
      try {
        const password = await bcrypt.hash(pwd, 10);
        const user = await UserModel.create({ email, password });  
          return done(null, user);
        } catch (error) {
          done(error);
        }}));


passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        //console.log(user.password);
        const validate = await user.isValidPassword(password,user.password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        const body = { email: user.email};

        const token = jwt.sign({ user: body }, process.env.TOP_SECRET, {
          expiresIn: "10h"});

        var safetoken = AES.encrypt(token, process.env.SECRET_KEY).toString();
        user.validApi.push(safetoken);

        user.save();
        
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

