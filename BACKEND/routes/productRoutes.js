const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/createProduct', productController.createProduct);

// Get all products
router.get('/getProduct', productController.getAllProducts);

// Get product by ID
router.get('/getProductById/:product_id', productController.getProductById);

// Update a product
router.put('/updateProduct/:product_id', productController.updateProduct);

// Delete a product
router.delete('/deleteProduct/:product_id', productController.deleteProduct);

module.exports = router;