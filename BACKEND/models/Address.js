const pool = require('../db');

async function insert(user_info_id, address_line, city, mobile) {
  try {
    const [result] = await pool.query('INSERT INTO user_address (user_info_id, address_line, city, mobile) VALUES (?, ?, ?, ?)', [user_info_id, address_line, city, mobile]);
    return result.insertId;
  } catch (error) {
    throw new Error(`Failed to insert address: ${error.message}`);
  }
}

async function getAll() {
  try {
    const [rows] = await pool.query('SELECT * FROM user_address');
    return rows;
  } catch (error) {
    throw new Error(`Failed to get addresses: ${error.message}`);
  }
}

async function getById(user_info_id) {
  try {
    const [rows] = await pool.query('SELECT * FROM user_address WHERE user_info_id = ?', [user_info_id]);
    if (rows.length === 0) {
      return {
        user_info_id: user_info_id,
        address_line: 'none',
        city: 'none',
        mobile: 'none'
      };
      // return null;
      // console.log('Address not found');
    }
    return rows[0];
  } catch (error) {
    throw new Error(`Failed to get address ${user_info_id}: ${error.message}`);
  }
}

async function update(address_id, address_line, city, mobile) {
  try {
    await pool.query('UPDATE user_address SET address_line=?, city=?, mobile=? WHERE user_address_id=?', [address_line, city, mobile, address_id]);
    return true;
  } catch (error) {
    throw new Error(`Failed to update address ${address_id}: ${error.message}`);
  }
}

async function del(address_id) {
  try {
    await pool.query('DELETE FROM user_address WHERE user_address_id = ?', [address_id]);
    return true;
  } catch (error) {
    throw new Error(`Failed to delete address ${address_id}: ${error.message}`);
  }
}

async function getUserById(user_info_id) {
  try {
    const [rows] = await pool.query('SELECT * FROM user_info WHERE user_info_id =?', [user_info_id]);
    if (rows.length === 0) {
      throw new Error('User info not found');
    }
    return rows[0];
  } catch (error) {
    throw new Error(`Failed to get user info ${user_info_id}: ${error.message}`);
  }
}


module.exports = {
  insert,
  getAll,
  getById,
  update,
  getUserById,
  delete: del
};