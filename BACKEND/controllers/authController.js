const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const jwtSecret = process.env.JWT_SECRET;

exports.registerUser = (req, res) => {
    const { username, email, password, firstName, lastName, middleName, userLevel } = req.body;

    console.log('Data received by the server:', req.body);

    if (!username || !email || !password || !firstName || !lastName || userLevel === undefined) {
        return res.status(400).send({ message: "All fields (username, email, password, firstName, lastName, userLevel) are required" });
    }

    bcrypt.hash(password, 8, (err, hash) => {
        if (err) throw err;

        const userInfoQuery = 'INSERT INTO user_info (last_name, first_name, user_level) VALUES (?, ?, ?)';
        const userCredQuery = 'INSERT INTO user_cred (user_info_id, username, password, email) VALUES (?, ?, ?, ?)';

        db.query(userInfoQuery, [lastName, firstName, userLevel], (err, userInfoResult) => {
            if (err) {
                return res.status(500).send({ message: "Error saving user info to the database" });
            }

            const user_info_id = userInfoResult.insertId;

            db.query(userCredQuery, [user_info_id, username, hash, email], (err, userCredResult) => {
                if (err) {
                    return res.status(500).send({ message: "Error saving user credentials to the database" });
                }
                
                res.send({ message: "User was registered successfully!" });
            });
        });
    });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    console.log(`Attempting login for ${username}`);

    const query = 'SELECT * FROM user_cred WHERE username = ?';
    db.query(query, [username], (error, results) => {
        if (error) {
            console.error("Error querying database:", error);
            return res.status(500).send({ auth: false, message: "Error querying database" });
        }

        if (results.length === 0) {
            console.log(`User ${username} not found`);
            return res.status(404).send({ auth: false, message: "User not found" });
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).send({ auth: false, message: "Error comparing passwords" });
            }

            if (result) {
                const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: 86400 });
                console.log(`User ${username} logged in successfully`);
                res.status(200).send({ auth: true, token: token });
            } else {
                console.log(`Authentication failed for ${username}: Wrong password`);
                res.status(401).send({ auth: false, message: "Authentication failed. Wrong password." });
            }
        });
    });
};

exports.logoutUser = (req, res) => {
    console.log("User logged out");
    res.status(200).send({ auth: false, token: null });
};