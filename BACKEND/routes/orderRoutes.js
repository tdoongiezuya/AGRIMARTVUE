const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.placeOrder);
router.get('/:userId', orderController.getOrdersByUserId);
router.get('/:id', orderController.getOrderById);

module.exports = router;