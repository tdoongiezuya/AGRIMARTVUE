const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "srv1155.hstgr.io",
  port: "3306",
  user: "u109301395_admin",
  password: "?9lRVYKuZ",
  waitForConnections: true,
  connectionLimit: 10,
  database: "u109301395_agrimartdb",

});

module.exports = connection;
