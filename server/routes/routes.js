const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

router.post('/signup', function(req, res, next) {
  passport.authenticate('signup', async (err, user, info) => {
    if (err) { return next(err);}
    console.log(req);
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
            const error = new Error('An error occurred.');

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, process.env.TOP_SECRET);

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;