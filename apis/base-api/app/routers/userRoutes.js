const express = require("express")
const router = express.Router();
const userController = require('../controllers/userController');
const { userConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${userConstants.GET_ALL_USER}`, authFilter.verifyToken, userController.getAllUser);
router.post(`${userConstants.LOGIN}`, userController.login);
router.post(`${userConstants.REGISTER}`, userController.register);
router.get(`${userConstants.LOGOUT}`, authFilter.verifyToken, userController.logout);


module.exports = {
    userRouter: router
}