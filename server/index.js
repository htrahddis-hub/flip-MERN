const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const passport = require('passport');
const routes = require('./auth/routes/routes');
const cookieParser = require("cookie-parser");

require('./auth/auth');

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cookieParser());
app.use(cors({origin:'http://localhost:3000',credentials: true}));
app.use(passport.initialize());
const UserModel = require('./model/userAuth');
app.use('/auth/',routes);

const secureRoute = require('./auth/routes/secure-routes');
app.use('/user/', secureRoute);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.get('/',(req,res) =>{
	res.send("Hello to jwtAPI");
});

// app.get("/private", (req, res) => {
//   if (req.cookies.token){
//     if(req.cookies.token ==="hello")
//       return res.status(200).json({ secret: "Ginger ale is a specific Root Beer" });
//     res.status(401).send();
//   }
//   res.status(401).send();
// });
// app.post("/login", (req, res) => {
//   var now = new Date();
//   var time = now.getTime();
//   var expireTime = time + 1000*600;
//   now.setTime(expireTime);
//   console.log("recive");
//   if(req.body.password==="1234")
//   return res
//     .writeHead(200, {
//       "Set-Cookie": "token=hello; HttpOnly;expires="+now.toUTCString()+"",
//       "Access-Control-Allow-Credentials": "true",
//       "Access-Control-Allow-Origin": 'http://localhost:3000'
//     })
//     .send();
//   res.status(401).json({message:"wrong"});
// });

// app.post('/signup', function(req, res){
//   //console.log(req.body);
//   res.json(req.body).status(200);
// })

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));