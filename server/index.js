const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const app= express();
app.use(passport.initialize());
app.use(express.urlencoded({extended: true})); 
app.use(cors());
require('dotenv').config();

const UserModel = require('./model/model');

mongoose.connect("mongodb+srv://admin-siddharth:"+process.env.MONGODB_PASSWORD+"@cluster0.ziuav.mongodb.net/app?retryWrites=true&w=majority");
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(3000, ()=>{
    console.log("the app is live at port 3000");
})