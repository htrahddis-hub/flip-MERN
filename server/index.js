const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const passport = require('passport');
const routes = require('./auth/routes/routes');

require('./auth/auth');

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
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

app.post('/signup', function(req, res){
  //console.log(req.body);
  res.json(req.body).status(200);
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));