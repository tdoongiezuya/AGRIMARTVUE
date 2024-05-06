const pool = require('../db');

async function insert(user_info_id, address_line, city, mobile) {
  const query = 'INSERT INTO user_address (user_info_id, address_line, city, mobile, is_deleted) VALUES (?, ?, ?, ?, 0)';
  const values = [user_info_id, address_line, city, mobile];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function update(address_id, user_info_id, address_line, city, mobile) {
  const query = 'UPDATE user_address SET user_info_id=?, address_line=?, city=?, mobile=? WHERE user_address_id=?';
  const values = [user_info_id, address_line, city, mobile, address_id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function getById(address_id) {
  const query = 'SELECT * FROM user_address WHERE user_address_id = ?';
  const values = [address_id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length ? result[0] : null);
      }
    });
  });
}

async function del(address_id) {
  const query = 'DELETE FROM user_address WHERE user_address_id = ?';
  const values = [address_id];

  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function getAll() {
  const query = 'SELECT * FROM user_address';
  try {
    const [rows, fields] = await pool.execute(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insert,
  update,
  getById,
  delete: del,
  getAll,
};