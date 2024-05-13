const Product = require('../models/Product');

// Create a new product
async function createProduct(req, res) {
  try {
    const product = req.body;
    const newProductId = await Product.createProduct(product);
    res.status(201).json({ id: newProductId, message: 'Product created successfully' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
}

// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await Product.getAllProducts();
   
    console.log(products);
    res.status(200).send(products);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Failed to get products' });
  }
}

// Get product by ID
async function getProductById(req, res) {
  const product_id = req.params.product_id;
  try {
    const product = await Product.getProductById(product_id);
    res.status(200).send(product);
  } catch (error) {
    console.error(`Error getting product ${product_id}:`, error);
    res.status(500).json({ error: `Failed to get product ${product_id}` });
  }
}

// Update a product
async function updateProduct(req, res) {
  const productId = req.params.product_id;
  const updates = req.body;
  try {
    await Product.updateProduct(productId, updates);
    res.status(200).json({ message: `Product ${productId} updated successfully` });
  } catch (error) {
    console.error(`Error updating product ${productId}:`, error);
    res.status(500).json({ error: `Failed to update product ${productId}` });
  }
}

// Delete a product
async function deleteProduct(req, res) {
  const productId = req.params.product_id;
  try {
    await Product.deleteProduct(productId);
    res.status(200).json({ message: `Product ${productId} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting product ${productId}:`, error);
    res.status(500).json({ error: `Failed to delete product ${productId}` });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};