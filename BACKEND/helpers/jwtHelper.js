const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // Store decoded token data for future middleware/routes
        req.userId = decoded.id;
        next();
    });
}

// Apply JWT middleware to protected routes
app.use('/protectedRoute', verifyToken, protectedRouteHandler);