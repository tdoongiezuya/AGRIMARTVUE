require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./db');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', routes);

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});