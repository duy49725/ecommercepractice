const express = require('express');
const router = express.Router();
const CartController = require('../app/controller/cartController');
const fetchUser = require('../app/middleware/fetchUser');

router.post('/addtocart',fetchUser, CartController.addToCart)
router.post('/removefromcart',fetchUser,CartController.removeFromCart)
router.post('/getcart',fetchUser, CartController.getCart)
module.exports = router;