const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const jwtSecret = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
    const { username, email, password, firstName, lastName, middleName, userLevel} = req.body;

    console.log('Data received by the server:', req.body);

    if (!username || !email || !password || !firstName || !lastName || userLevel === undefined) {
        return res.status(400).send({ message: "All fields (username, email, password, firstName, lastName, userLevel) are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 8);
        const userInfoResult = await db.query('INSERT INTO user_info (last_name, first_name, user_level) VALUES (?, ?, ?)', [lastName, firstName, userLevel]);
        const user_info_id = userInfoResult[0].insertId;
        await db.query('INSERT INTO user_cred (user_info_id, username, password, email) VALUES (?, ?, ?, ?)', [user_info_id, username, hashedPassword, email]);
        
        res.send({ message: "User was registered successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ message: "Error registering user" });
    }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(`Attempting login for ${username}`);

    try {
        const results = await db.query('SELECT * FROM user_cred WHERE username = ?', [username]);

        if (results.length === 0) {
            console.log(`User ${username} not found`);
            return res.status(404).send({ auth: false, message: "User not found" });
        }

        const user = results[0];
        const hashPass = /^\$2y\$/.test(user[0].password) ? '$2a$' + user[0].password.slice(4) : user[0].password;
        console.log(hashPass, password)
        const passwordMatch = await bcrypt.compare(password, hashPass);
        console.log(passwordMatch)
        if (passwordMatch) {
            const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: 86400 });
            console.log(`User ${username} logged in successfully`);
            res.status(200).send({ auth: true, token: token });
        } else {
            console.log(`Authentication failed for ${username}: Wrong password`);
            res.status(401).send({ auth: false, message: "Authentication failed. Wrong password." });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send({ auth: false, message: "Error logging in" });
    }
};

exports.logoutUser = (req, res) => {
    console.log("User logged out");
    res.status(200).send({ auth: false, token: null });
};