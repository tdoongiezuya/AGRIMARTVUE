const pool = require('../db');

// Create a new cart item
async function createCartItem(product_id, quantity, user_info_id) {
  try {
    const [result] = await pool.query('INSERT INTO cart_item (product_id, quantity, user_info_id) VALUES (?, ?, ?)', [product_id, quantity, user_info_id]);
    return result.insertId;
  } catch (error) {
    throw new Error(`Failed to create cart item: ${error.message}`);
  }
}

// Get all cart items
async function getAllCartItems() {
  try {
    const [rows] = await pool.query('SELECT * FROM cart_item');
    return rows;
  } catch (error) {
    throw new Error(`Failed to get cart items: ${error.message}`);
  }
}

// Get cart item by ID
async function getCartItemById(cart_item_id) {
  try {
    const [rows] = await pool.query('SELECT * FROM cart_item WHERE cart_item_id = ?', [cart_item_id]);
    if (rows.length === 0) {
      throw new Error('Cart item not found');
    }
    return rows[0];
  } catch (error) {
    throw new Error(`Failed to get cart item ${cart_item_id}: ${error.message}`);
  }
}

// Update a cart item
async function updateCartItem(cart_item_id, quantity) {
  try {
    await pool.query('UPDATE cart_item SET quantity = ? WHERE cart_item_id = ?', [quantity, cart_item_id]);
    return true;
  } catch (error) {
    throw new Error(`Failed to update cart item ${cart_item_id}: ${error.message}`);
  }
}

// Delete a cart item
async function deleteCartItem(cart_item_id) {
  try {
    await pool.query('DELETE FROM cart_item WHERE cart_item_id = ?', [cart_item_id]);
    return true;
  } catch (error) {
    throw new Error(`Failed to delete cart item ${cart_item_id}: ${error.message}`);
  }
}

module.exports = {
  createCartItem,
  getAllCartItems,
  getCartItemById,
  updateCartItem,
  deleteCartItem
};