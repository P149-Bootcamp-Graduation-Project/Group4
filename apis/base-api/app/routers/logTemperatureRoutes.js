const express = require("express")
const router = express.Router();
const logTemperatureController = require('../controllers/logTemperatureController');
const { commonConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${commonConstants.GET_ALL}`, authFilter.verifyToken, logTemperatureController.getAll);
router.get(`${commonConstants.GET_ONE}`, authFilter.verifyToken, logTemperatureController.getOne);
router.post(`${commonConstants.INSERT}`, authFilter.verifyToken, logTemperatureController.insert);
router.get(`${commonConstants.DELETE}`, authFilter.verifyToken, logTemperatureController.delete);

module.exports = {
    logTemperatureRouter: router
}