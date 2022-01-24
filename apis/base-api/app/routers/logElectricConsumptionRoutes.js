const express = require("express")
const router = express.Router();
const logElectricConsumptionController = require('../controllers/logElectricConsumptionController');
const { commonConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${commonConstants.GET_ALL}`, authFilter.verifyToken, logElectricConsumptionController.getAll);
router.get(`${commonConstants.GET_ONE}`, authFilter.verifyToken, logElectricConsumptionController.getOne);
router.post(`${commonConstants.INSERT}`, authFilter.verifyToken, logElectricConsumptionController.insert);
router.get(`${commonConstants.DELETE}`, authFilter.verifyToken, logElectricConsumptionController.delete);

module.exports = {
    logElectricConsumptionRouter: router
}