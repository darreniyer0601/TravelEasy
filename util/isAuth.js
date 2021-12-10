const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.headers('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'Not authorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.jwtSecret);

        req.user = decodedToken.user;
        next();
    } catch (err) {
        throw err;
    }
}