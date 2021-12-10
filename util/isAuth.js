const jwt = require('jsonwebtoken');
require('dotenv').config();

const isAuth = (req, res, next) => {
    const token = req.headers('Authorization');

    try {
        const decodedToken = jwt.verify(token, process.env.jwtSecret);

        if (!decodedToken) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        req.user = decodedToken.user;

        next();
    } catch (err) {
        throw err;
    }
}

export default isAuth;