const pool = require('../db');

async function createReview(review) {
  const { reviewer_id, product_id, comment, rating, datetime } = review;
  const query = 'INSERT INTO reviews (reviewer_id, product_id, comment, rating, datetime) VALUES (?, ?, ?, ?, ?)';
  const values = [reviewer_id, product_id, comment, rating, datetime];
  try {
    const [result] = await pool.execute(query, values);
    return result.insertId;
  } catch (error) {
    throw new Error(`Failed to create review: ${error.message}`);
  }
}

async function getProductReviews(productId) {
  const query = 'SELECT * FROM reviews WHERE product_id = ?';
  try {
    const [rows] = await pool.query(query, [productId]);
    return rows;
  } catch (error) {
    throw new Error(`Failed to get reviews for product ${productId}: ${error.message}`);
  }
}

async function updateReview(reviewId, updates) {
  const query = 'UPDATE reviews SET ? WHERE review_id = ?';
  try {
    await pool.query(query, [updates, reviewId]);
    return true;
  } catch (error) {
    throw new Error(`Failed to update review ${reviewId}: ${error.message}`);
  }
}

async function deleteReview(reviewId) {
  const query = 'DELETE FROM reviews WHERE review_id = ?';
  try {
    await pool.query(query, [reviewId]);
    return true;
  } catch (error) {
    throw new Error(`Failed to delete review ${reviewId}: ${error.message}`);
  }
}

module.exports = {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview
};