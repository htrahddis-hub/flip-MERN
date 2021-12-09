const express = require('express');
const router = express.Router();

router.get(
  '/profile',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: {...req.user, password:null},
      token: req.query.secret_token
    })
  }
);
router.get('/products',(req,res,next)=>{
  res.json({
    products:"we don't haveproducts"
  })
})

module.exports = router;