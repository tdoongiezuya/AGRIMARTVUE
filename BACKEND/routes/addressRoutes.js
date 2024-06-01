const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Create a new address
router.post('/add', addressController.add);

// Get address by ID
router.get('/get/:user_info_id', addressController.get);

// Update an address
router.put('/update/:address_id', addressController.update);

// Delete an address
router.delete('/delete/:address_id', addressController.delete);

// Get all addresses
router.get('/getAllAddress', addressController.getAll);

// Get address by ID
router.get('/getInfoAndAddress/:user_info_id', addressController.getUserInfoAndAddress);

module.exports = router;