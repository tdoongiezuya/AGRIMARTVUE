const CartItem = require('../models/CartItem');

// Create a new cart item
async function createCartItem(req, res) {
  const { product_id, quantity } = req.body;
  try {
    const newCartItemId = await CartItem.createCartItem(product_id, quantity);
    res.status(201).json({ id: newCartItemId, message: 'Cart item created successfully' });
  } catch (error) {
    console.error('Error creating cart item:', error);
    res.status(500).json({ error: 'Failed to create cart item' });
  }
}

// Get all cart items
async function getAllCartItems(req, res) {
  try {
    const cartItems = await CartItem.getAllCartItems();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error getting cart items:', error);
    res.status(500).json({ error: 'Failed to get cart items' });
  }
}

// Get cart item by ID
async function getCartItemById(req, res) {
  const cartItemId = req.params.cart_item_id;
  try {
    const cartItem = await CartItem.getCartItemById(cartItemId);
    res.status(200).json(cartItem);
  } catch (error) {
    console.error(`Error getting cart item ${cartItemId}:`, error);
    res.status(500).json({ error: `Failed to get cart item ${cartItemId}` });
  }
}

// Update a cart item
async function updateCartItem(req, res) {
  const cartItemId = req.params.cart_item_id;
  const {quantity } = req.body;
  try {
    await CartItem.updateCartItem(cartItemId, quantity);
    res.status(200).json({ message: `Cart item ${cartItemId} updated successfully` });
  } catch (error) {
    console.error(`Error updating cart item ${cartItemId}:`, error);
    res.status(500).json({ error: `Failed to update cart item ${cartItemId}` });
  }
}

// Delete a cart item
async function deleteCartItem(req, res) {
  const cartItemId = req.params.cart_item_id;
  try {
    await CartItem.deleteCartItem(cartItemId);
    res.status(200).json({ message: `Cart item ${cartItemId} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting cart item ${cartItemId}:`, error);
    res.status(500).json({ error: `Failed to delete cart item ${cartItemId}` });
  }
}

module.exports = {
  createCartItem,
  getAllCartItems,
  getCartItemById,
  updateCartItem,
  deleteCartItem
};