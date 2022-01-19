const express = require("express")
const router = express.Router();
const { authConstants } = require('./constants');
const authController = require('../controllers/authController')

router.get(`${authConstants.TOKEN}`, authController.verifyRefreshToken, );

module.exports = {
    userRouter: router
}