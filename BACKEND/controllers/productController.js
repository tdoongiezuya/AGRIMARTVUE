const Product = require('../models/Product');
const FarmerProduct = require('../models/FarmerProduct');
const fs = require('fs');

// Create a new product with image upload
async function createProduct(req, res) {
  try {
    // Check if any files were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const imageFile = req.files[0];
    const imageBuffer = fs.readFileSync(imageFile.path); // Read image file synchronously

    const product = {
      ...req.body,
      image_name: imageFile.originalname,
      image_data: imageBuffer
    };

    // Insert product into database
    const newProductId = await Product.createProduct(product);

    // Delete the uploaded file after reading and processing i
    fs.unlinkSync(imageFile.path);

    res.status(201).json({ id: newProductId, message: 'Product created successfully' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
}

async function createFarmerProduct(req, res) {
  try {
  
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const imageFile = req.files[0];
    const imageBuffer = fs.readFileSync(imageFile.path); 

    const farmerProduct = {
      ...req.body,
      image_name: imageFile.originalname,
      image_data: imageBuffer
    };


    const newProductId = await FarmerProduct.createFarmerProduct(farmerProduct);

    fs.unlinkSync(imageFile.path);

    res.status(201).json({ id: newProductId, message: 'Farmer product created successfully' });
  } catch (error) {
    console.error('Error creating farmer product:', error);
    res.status(500).json({ error: 'Failed to create farmer product' });
  }
}


async function getAllProducts(req, res) {
  try {
    const products = await Product.getAllProducts();
    res.status(200).json(products);
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
  createFarmerProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
