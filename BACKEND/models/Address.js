const pool = require('../db');

function insert(user_info_id, address_line, city, mobile, callback) {
  pool.query(
    'INSERT INTO user_address (user_info_id, address_line, city, mobile, is_deleted) VALUES (?, ?, ?, ?, 0)',
    [user_info_id, address_line, city, mobile],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
}

function update(id, user_info_id, address_line, city, mobile, callback) {
  pool.query(
    'UPDATE user_address SET user_info_id=?, address_line=?, city=?, mobile=? WHERE user_address_id=?',
    [user_info_id, address_line, city, mobile, id],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
}

module.exports = {
  insert,
  update,
};