const Address = require('../models/Address');

async function add(req, res) {
  const { user_info_id, address_line, city, mobile } = req.body;

  if (!user_info_id || !address_line || !city || !mobile) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await Address.insert(user_info_id, address_line, city, mobile);
    res.status(201).json({ message: 'Address inserted successfully', address_id: result.insertId });
  } catch (error) {
    console.error('Error inserting address:', error);
    res.status(500).json({ error: 'Failed to insert address' });
  }
}

async function update(req, res) {
  const { address_id } = req.params;
  const { user_info_id, address_line, city, mobile } = req.body;

  if (!user_info_id || !address_line || !city || !mobile) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await Address.update(address_id, user_info_id, address_line, city, mobile);
    res.status(200).json({ message: 'Address updated successfully' });
  } catch (error) {
    console.error('Error updating address:', error);
    res.status(500).json({ error: 'Failed to update address' });
  }
}

async function get(req, res) {
  const { address_id } = req.params;

  try {
    const address = await Address.getById(address_id);
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.status(200).json(address);
  } catch (error) {
    console.error('Error fetching address:', error);
    res.status(500).json({ error: 'Failed to fetch address' });
  }
}

async function del(req, res) {
  const { address_id } = req.params;

  try {
    await Address.delete(address_id);
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    console.error('Error deleting address:', error);
    res.status(500).json({ error: 'Failed to delete address' });
  }
}

async function getAll(req, res) {
  try {
    const addresses = await Address.getAll();
    res.status(200).json(addresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ error: 'Failed to fetch addresses' });
  }
}

module.exports = {
  add,
  update,
  get,
  delete: del,
  getAll,
};