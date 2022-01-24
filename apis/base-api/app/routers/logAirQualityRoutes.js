const express = require("express")
const router = express.Router();
const logAirQualityController = require('../controllers/logAirQualityController');
const { commonConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${commonConstants.GET_ALL}`, authFilter.verifyToken, logAirQualityController.getAll);
router.get(`${commonConstants.GET_ONE}`, authFilter.verifyToken, logAirQualityController.getOne);
router.post(`${commonConstants.INSERT}`, authFilter.verifyToken, logAirQualityController.insert);
router.get(`${commonConstants.DELETE}`, authFilter.verifyToken, logAirQualityController.delete);

module.exports = {
    logAirQualityRouter: router
}