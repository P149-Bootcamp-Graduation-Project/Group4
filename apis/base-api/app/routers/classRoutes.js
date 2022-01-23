const express = require("express")
const router = express.Router();
const classController = require('../controllers/classController');
const { commonConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${commonConstants.GET_ALL}`, authFilter.verifyToken, classController.getAll);
router.post(`${commonConstants.GET_ONE}`, authFilter.verifyToken, classController.getOne);
router.post(`${commonConstants.INSERT}`, authFilter.verifyToken, classController.insert);
router.get(`${commonConstants.DELETE}`, authFilter.verifyToken, classController.delete);

module.exports = {
    classRouter: router
}