const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/createProduct', productController.createProduct);
router.get('/getProduct', productController.getAllProducts);
router.get('/getProductById/:product_id', productController.getProductById);
router.get('/getProductByUserId/:user_info_id', productController.getProductByUserId);
router.put('/updateProduct/:product_id', productController.updateProduct);
router.delete('/deleteProduct/:product_id', productController.deleteProduct);

module.exports = router;