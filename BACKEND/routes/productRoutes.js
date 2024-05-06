const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Get product by ID
router.get('/:product_id', productController.getProductById);

// Update a product
router.put('/:product_id', productController.updateProduct);

// Delete a product
router.delete('/:product_id', productController.deleteProduct);

module.exports = router;