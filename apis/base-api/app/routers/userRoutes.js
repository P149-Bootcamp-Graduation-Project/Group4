const express = require("express")
const router = express.Router();
const userController = require('../controllers/userController');
const { userConstants } = require('./constants');

router.get(`${userConstants.GET_ALL_USER}`, userController.getAllUser);

module.exports = {
    userRouter: router
}