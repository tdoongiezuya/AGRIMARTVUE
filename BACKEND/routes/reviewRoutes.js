const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Create a new review
router.post('/', reviewController.createReview);

// Get reviews for a product
router.get('/:product_id', reviewController.getProductReviews);

// Update a review
router.put('/:review_id', reviewController.updateReview);

// Delete a review
router.delete('/:review_id', reviewController.deleteReview);

module.exports = router;