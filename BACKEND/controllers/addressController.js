const Address = require('../models/Address');
const db = require('../db');

async function add(req, res) {
  const { user_info_id, address_line, city, mobile } = req.body;

  if (!user_info_id || !address_line || !city || !mobile) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const results = await db.query('INSERT INTO user_address (user_info_id, address_line, city, mobile) VALUES (?, ?, ?, ?)', [user_info_id, address_line, city, mobile]);
    res.status(201).json({ message: 'Address inserted successfully', address_id: results.insertId });
  } catch (error) {
    console.error('Error inserting address:', error);
    res.status(500).json({ error: 'Failed to insert address' });
  }
}

async function update(req, res) {
  const { id } = req.params; // Extract address ID from URL
  const { user_info_id, address_line, city, mobile } = req.body;

  if (!user_info_id || !address_line || !city || !mobile) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Set is_deleted to 1 for the old address
  try {
    await db.query('UPDATE user_address SET is_deleted = 1 WHERE user_address_id = ? AND is_deleted = 0', [id]);

    // Update the new address
    await db.query('UPDATE user_address SET user_info_id = ?, address_line = ?, city = ?, mobile = ? WHERE user_address_id = ?', [user_info_id, address_line, city, mobile, id]);
    res.status(200).json({ message: 'Address updated successfully' });
  } catch (error) {
    console.error('Error updating address:', error);
    res.status(500).json({ error: 'Failed to update address' });
  }
}

module.exports = {
  add,
  update,
};