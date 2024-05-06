const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');

// Create a new cart item
router.post('/createCartItem', cartItemController.createCartItem);

// Get all cart items
router.get('/getAllCartItems', cartItemController.getAllCartItems); // Add this line

// Get cart item by ID
router.get('/getCartItemById/:cart_item_id', cartItemController.getCartItemById);

// Update a cart item
router.put('/updateCartItem/:cart_item_id', cartItemController.updateCartItem);

// Delete a cart item
router.delete('/deleteCartItem/:cart_item_id', cartItemController.deleteCartItem);

module.exports = router;