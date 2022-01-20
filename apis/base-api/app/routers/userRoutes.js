const express = require("express")
const router = express.Router();
const userController = require('../controllers/userController');
const { userConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${userConstants.GET_ALL_USER}`, authFilter.verifyToken, userController.getAllUser);

module.exports = {
    userRouter: router
}