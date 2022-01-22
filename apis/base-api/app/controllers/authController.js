const authService = require("../services/authService");
const jwt = require("jsonwebtoken");
const {jwtConfig} = require("../configs/config");
const {StatusCodes} = require("http-status-codes");

const authController = {
    verifyToken(req, res, next) {
        return authService.verifyToken(req, res, next);
    },

    verifyRefreshToken(req, res, next) {
        return authService.verifyRefreshToken(req, res, next);
    },

    getAccessToken(req, res) {
        const token = req.body.token;
        const decoded = jwt.verify(token, jwtConfig.secretKey);
        const id = decoded.sub;
        const tokenRO = authService.getAccessToken(id);
        res.json({data: tokenRO, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    }
}

module.exports = authController;