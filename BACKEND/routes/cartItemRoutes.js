const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');

// Create a new cart item
router.post('/cart-items', cartItemController.createCartItem);

// Get all cart items
router.get('/cart-items', cartItemController.getAllCartItems); // Add this line

// Get cart item by ID
router.get('/cart-items/:cart_item_id', cartItemController.getCartItemById);

// Update a cart item
router.put('/cart-items/:cart_item_id', cartItemController.updateCartItem);

// Delete a cart item
router.delete('/cart-items/:cart_item_id', cartItemController.deleteCartItem);

module.exports = router;