const mysql = require('mysql2/promise'); // Importing mysql2 with promise support

const pool = mysql.createPool({
  connectionLimit: 25,
  connectTimeout: 60000,
  host: 'srv1155.hstgr.io',
  port: '3306',
  user: 'u109301395_root',
  password: '4I/UHu=:f',
  database: 'u109301395_agrimart_db'
});

module.exports = pool;