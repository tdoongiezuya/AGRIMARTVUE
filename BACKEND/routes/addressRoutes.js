const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.post('/', addressController.add);
router.put('/:id', addressController.update);

module.exports = router;