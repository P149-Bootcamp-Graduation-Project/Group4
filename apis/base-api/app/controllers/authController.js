const {verifyToken, verifyRefreshToken} = require("../services/authService");

const authController = {
    verifyToken(req, res, next) {
        return verifyToken(req, res, next);
    },

    verifyRefreshToken(req, res, next) {
        return verifyRefreshToken(req, res, next);
    }
}

module.exports = authController;