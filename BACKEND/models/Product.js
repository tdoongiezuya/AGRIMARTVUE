const pool = require('../db');

async function createProduct(product) {
  const { product_name, description, price, product_category, user_info_id, image_name, image_data } = product;
  const query = 'INSERT INTO product (product_name, description, price, product_category, user_info_id, image_name, image_data) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [product_name, description, price, product_category, user_info_id, image_name, image_data];
  try {
    const [result] = await pool.execute(query, values);
    return result.insertId;
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}
//
async function createFarmerProduct(product) {
  try {
    const query = 'INSERT INTO products SET ?';
    const [result] = await pool.query(query, product);
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  const query = 'SELECT * FROM product';
  try {
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(`Failed to get products: ${error.message}`);
  }
}

async function getProductById(product_id) {
  const query = 'SELECT * FROM product WHERE product_id = ?';
  try {
    const [rows] = await pool.query(query, [product_id]);
    if (rows.length === 0) {
      throw new Error('Product not found');
    }
    return rows[0];
  } catch (error) {
    throw new Error(`Failed to get product ${product_id}: ${error.message}`);
  }
}

async function updateProduct(productId, updates) {
  const query = 'UPDATE product SET ? WHERE product_id = ?';
  try {
    await pool.query(query, [updates, productId]);
    return true;
  } catch (error) {
    throw new Error(`Failed to update product ${productId}: ${error.message}`);
  }
}

async function deleteProduct(productId) {
  const query = 'DELETE FROM product WHERE product_id = ?';
  try {
    await pool.query(query, [productId]);
    return true;
  } catch (error) {
    throw new Error(`Failed to delete product ${productId}: ${error.message}`);
  }
}

module.exports = {
  createProduct,
  createFarmerProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};