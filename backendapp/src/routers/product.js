const express = require('express');
const router = express.Router();
const ProductController = require('../app/controller/productController');

router.post('/addproduct', ProductController.addProduct)
router.post('/removeproduct', ProductController.removeProduct)
router.get('/allproducts', ProductController.getAllProduct)
router.get('/newcollection', ProductController.newcollection)
router.get('/popularinwomen', ProductController.popularInWomen)
module.exports = router;