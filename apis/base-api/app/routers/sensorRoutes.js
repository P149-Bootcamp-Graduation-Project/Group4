const express = require("express")
const router = express.Router();
const sensorController = require('../controllers/sensorController');
const { commonConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${commonConstants.GET_ALL}`, authFilter.verifyToken, sensorController.getAllSensors);
router.post(`${commonConstants.GET_ONE}`, authFilter.verifyToken, sensorController.getOneSensor);
router.post(`${commonConstants.INSERT}`, authFilter.verifyToken, sensorController.insert);
router.get(`${commonConstants.DELETE}`, authFilter.verifyToken, sensorController.delete);


module.exports = {
    sensorRouter: router
}