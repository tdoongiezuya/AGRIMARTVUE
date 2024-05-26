const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        console.log('Retrieved user ID:', decoded.id);
        // Store decoded token data for future middleware/routes
        req.userId = decoded.id;
        next();
    });
}

