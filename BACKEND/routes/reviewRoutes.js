const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Create a new review
router.post('/createReview', reviewController.createReview);

// Get reviews for a product
router.get('/getProductReview/:product_id', reviewController.getProductReviews);

// Update a review
router.put('/updateReview/:review_id', reviewController.updateReview);

// Delete a review
router.delete('/deleteReview/:review_id', reviewController.deleteReview);

module.exports = router;