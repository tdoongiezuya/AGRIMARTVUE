const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Create a new address
router.post('/addAddress', addressController.add);

// Get address by ID
router.get('/getAddress/:address_id', addressController.get);

// Update an address
router.put('/updateAddress/:address_id', addressController.update);

// Delete an address
router.delete('/deleteAddress/:address_id', addressController.delete);

// Get all addresses
router.get('/getAllAddress', addressController.getAll);

module.exports = router;