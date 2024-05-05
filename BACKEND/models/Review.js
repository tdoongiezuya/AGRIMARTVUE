const db = require('../db');

async function createReview(review) {
  const { reviewer_id, product_id, comment, rating, datetime } = review;
  const query = 'INSERT INTO reviews (reviewer_id, product_id, comment, rating, datetime) VALUES (?, ?, ?, ?, ?)';
  const values = [reviewer_id, product_id, comment, rating, datetime];
  try {
    // Ensure connection is established before executing the query
    if (db.state === 'disconnected') {
      await db.connect();
    }
    const [result] = await db.promise().execute(query, values);
    return result.insertId;
  } catch (error) {
    throw new Error(`Failed to create review: ${error.message}`);
  }
}


async function getProductReviews(productId) {
  const query = 'SELECT * FROM reviews WHERE product_id = ?';
  try {
    const [rows] = await db.promise().query(query, [productId]);
    return rows;
  } catch (error) {
    throw new Error(`Failed to get reviews for product ${productId}: ${error.message}`);
  }
}

async function updateReview(reviewId, updates) {
  const query = 'UPDATE reviews SET ? WHERE review_id = ?';
  try {
    await db.promise().query(query, [updates, reviewId]);
    return true;
  } catch (error) {
    throw new Error(`Failed to update review ${reviewId}: ${error.message}`);
  }
}

async function deleteReview(reviewId) {
  const query = 'DELETE FROM reviews WHERE review_id = ?';
  try {
    await db.promise().query(query, [reviewId]);
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