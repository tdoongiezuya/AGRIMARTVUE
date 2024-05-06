const Review = require('../models/Review');

// Create a new review
async function createReview(req, res) {
  try {
    const { reviewer_id, product_id, comment, rating, datetime } = req.body;
    if (!reviewer_id || !product_id || !comment || !rating || !datetime) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    const newReviewId = await Review.createReview(req.body);
    res.status(201).json({ id: newReviewId, message: 'Review created successfully' });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
}

// Get reviews for a product
async function getProductReviews(req, res) {
  const productId = req.params.product_id;
  try {
    const reviews = await Review.getProductReviews(productId);
    res.status(200).json(reviews);
  } catch (error) {
    console.error(`Error getting reviews for product ${productId}:`, error);
    res.status(500).json({ error: `Failed to get reviews for product ${productId}` });
  }
}

// Update a review
async function updateReview(req, res) {
  const reviewId = req.params.review_id;
  const updates = req.body; // Assuming updates are sent in the request body
  try {
    await Review.updateReview(reviewId, updates);
    res.status(200).json({ message: `Review ${reviewId} updated successfully` });
  } catch (error) {
    console.error(`Error updating review ${reviewId}:`, error);
    res.status(500).json({ error: `Failed to update review ${reviewId}` });
  }
}

// Delete a review
async function deleteReview(req, res) {
  const reviewId = req.params.review_id;
  try {
    await Review.deleteReview(reviewId);
    res.status(200).json({ message: `Review ${reviewId} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting review ${reviewId}:`, error);
    res.status(500).json({ error: `Failed to delete review ${reviewId}` });
  }
}

module.exports = {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview
};