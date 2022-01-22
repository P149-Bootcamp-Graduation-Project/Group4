const express = require("express")
const router = express.Router();
const authController = require('../controllers/authController')

router.get('/', authController.verifyRefreshToken, authController.getAccessToken);

module.exports = {
    authRouter: router
}