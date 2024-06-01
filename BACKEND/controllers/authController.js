const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const Address = require('../models/Address');
const jwtSecret = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
    const { username, email, password, first_name, last_name, user_level } = req.body;

    console.log('Data received by the server:', req.body);

    if (!username || !email || !password || !first_name || !last_name || user_level === undefined) {
        return res.status(400).send({ message: "All fields (username, email, password, first_name, lastName, user_level) are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 8);
        const userInfoResult = await db.query('INSERT INTO user_info (last_name, first_name, user_level) VALUES (?, ?, ?)', [last_name, first_name, user_level]);
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
    console.log('Data received by the server:', req.body);

    try {
        const results = await db.query('SELECT * FROM user_cred WHERE username = ?', [username]);

        if (results.length === 0) {
            console.log(`User ${username} not found`);
            return res.status(404).send({ auth: false, message: "User not found" });
        }

        const user = results[0];
        console.log(user)
        console.log(user[0].user_info_id)
        const hashPass = /^\$2y\$/.test(user[0].password) ? '$2a$' + user[0].password.slice(4) : user[0].password;
        console.log(hashPass, password)
        const passwordMatch = await bcrypt.compare(password, hashPass);
        console.log(passwordMatch)
        if (passwordMatch) {
            // Correctly fetching user info using user_info_id
            const userInfoResults = await db.query('SELECT first_name, last_name, user_level FROM user_info WHERE user_info_id =?', [user[0].user_info_id]);

            const userInfo = userInfoResults[0];
            console.log(userInfo)

            
            const userAddressResults = await db.query('SELECT * FROM user_address WHERE user_info_id = ?', [user[0].user_info_id]);

            console.log(userAddressResults)
            if (userAddressResults.length > 0) {
                const userAddress = userAddressResults[0][0];
                console.log(userAddress);
                // Your existing logic to construct the response
                const token = jwt.sign({ id: user.user_info_id }, jwtSecret, { expiresIn: 86400 });
                console.log(`User ${username} logged in successfully`);
                const response = {
                    auth: true,
                    token: token,
                    user: {
                        user_info_id: user[0].user_info_id,
                        username: user[0].username,
                        first_name: userInfo[0].first_name,
                        last_name: userInfo[0].last_name,
                        email: user[0].email,
                        user_level: userInfo[0].user_level,
                        address_line: userAddress?.address_line,
                        city: userAddress?.city,
                        mobile: userAddress?.mobile,
                        // Add other user details you want to include here
                    }
                };
                res.status(200).send(response);
                console.log(response)
            } else {
                // Adjust the response to indicate that the address was not found
                const userAddress = {
                    user_info_id: user[0].user_info_id,
                    address_line: 'none',
                    city: 'none',
                    mobile: 'none'
                };
                console.log(userAddress);
                // Adjust the rest of your response construction logic
            }
            // const userAddress = userAddressResults[0];
            // console.log(userAddress)
            // const token = jwt.sign({ id: user.user_info_id }, jwtSecret, { expiresIn: 86400 });
            // console.log(`User ${username} logged in successfully`);
            // const response = {
            //     auth: true,
            //     token: token,
            //     user: {
            //         user_info_id: user[0].user_info_id,
            //         username: user[0].username,
            //         first_name: userInfo[0].first_name,
            //         last_name: userInfo[0].last_name,
            //         email: user[0].email,
            //         user_level: userInfo[0].user_level,
            //         address_line: userAddress?.address_line,
            //         city: userAddress?.city,
            //         mobile: userAddress?.mobile,
            //         // Add other user details you want to include here
            //     }
            // };
            // res.status(200).send(response);
            // console.log(response)
        } else {
            console.log(`Authentication failed for ${username}: Wrong password`);
            res.status(401).send({ auth: false, message: "Authentication failed. Wrong password." });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send({ auth: false, message: "Error logging in" });
    }
};

// Endpoint to get user details from user_info table
exports.getuserInfo = async (req, res) => {
    const user_info_id = req.params.user_info_id;
    try {
        // Query to fetch user details by ID from user_info table
        const results = await db.query('SELECT first_name, last_name, user_level FROM user_info WHERE user_info_id =?', [user_info_id]);

        if (results.length === 0) {
            return res.status(404).send({ auth: false, message: "User not found" });
        }

        const user_info = results[0];
        // Constructing the response object
        const userInfoResponse = {
            first_name: user_info.first_name,
            last_name: user_info.last_name,
            user_level: user_info.user_level,
        };

        res.status(200).send({ auth: true, user_info: userInfoResponse });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send({ auth: false, message: "Error fetching user details" });
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        // Execute the SQL query to fetch user details
        const results = await db.query(`
            SELECT 
                ui.first_name, 
                ui.last_name, 
                ui.user_level, 
                IFNULL(ua.address, 'N/A'), 
                IFNULL(ua.phone_number, 'N/A'), 
                IFNULL(ua.city, 'N/A')
            FROM 
                user_info ui
            LEFT JOIN 
                user_address ua ON ui.user_id = ua.user_id
            WHERE 
                ui.user_id =?
        `, [req.userId]); // Use req.userId to fetch details for the authenticated user

        if (results.length === 0) {
            return res.status(404).send({ auth: false, message: "User not found" });
        }

        const userDetails = results[0];
        res.status(200).send({ auth: true, userDetails: userDetails });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send({ auth: false, message: "Error fetching user details" });
    }
};

exports.logoutUser = (req, res) => {
    console.log("User logged out");
    res.status(200).send({ auth: false, token: null });
};