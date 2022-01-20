const { verifyToken, verifyRefreshToken } = require('../middleware/authFilter')

const authService = {
    verifyToken(req, res, next) {
        return verifyToken(req, res, next);
    },

    verifyRefreshToken(req, res, next) {
        return verifyRefreshToken(req, res, next);
    }
}

module.exports = authService;