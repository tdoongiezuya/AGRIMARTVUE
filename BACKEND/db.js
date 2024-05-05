const mysql = require('mysql2');

const connection = mysql.createConnection({
    connectionLimit: 10, // Adjust this value based on your application's needs
    host: 'srv1155.hstgr.io',
    port: '3306',
    user: 'u109301395_admin',
    password: '?9lRVYKuZ',
    database: 'u109301395_agrimartdb'
});

module.exports = connection;
