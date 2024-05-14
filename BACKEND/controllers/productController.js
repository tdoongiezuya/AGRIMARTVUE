const Product = require('../models/Product');
const fs = require('fs');
const util = require('util');

// Promisify the readFile function for asynchronous file reading
const readFileAsync = util.promisify(fs.readFile);

async function createProduct(req, res) {
  try {
    // Check if an image file was uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const imageFile = req.files[0];

    // Read the image file asynchronously
    const imageData = await readFileAsync(imageFile.path);

    const product = {
      ...req.body,
      image_name: imageFile.originalname,
      // Storing the image data as a BLOB in the database
      image_data: imageData
    };

    try {
      // Save the product to the database
      const newProductId = await Product.createProduct(product);
      
      // Delete the temporary image file
      fs.unlink(imageFile.path, (err) => {
        if (err) {
          console.error('Error deleting image file:', err);
        }
      });

      // Respond with success
      res.status(201).json({ id: newProductId, message: 'Product created successfully' });
    } catch (error) {
      console.error('Error saving product to database:', error);
      // Respond with an error message
      res.status(500).json({ error: 'Failed to save product to database' });
    }
  } catch (error) {
    console.error('Error reading image file:', error);
    // Respond with an error message
    res.status(500).json({ error: 'Failed to read image file' });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.getAllProducts();
    const productsWithBase64Images = products.map(product => ({
     ...product,
      image_data: product.image_data? product.image_data.toString('base64') : null
    }));
    res.status(200).json(productsWithBase64Images);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Failed to get products' });
  }
}

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

async function getProductByUserId(req, res) {
  const user_info_id = req.params.user_info_id;
  try {
    const products = await Product.getProductByUserId(user_info_id);
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error getting products for user ${user_info_id}:`, error);
    res.status(500).json({ error: `Failed to get products for user ${user_info_id}` });
  }
}

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
  getProductByUserId,
  updateProduct,
  deleteProduct
};