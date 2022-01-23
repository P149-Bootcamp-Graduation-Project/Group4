const express = require("express")
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const { commonConstants } = require('./constants');
const authFilter = require('../middleware/authFilter')

router.get(`${commonConstants.GET_ALL}`, authFilter.verifyToken, schoolController.getAllSchools);
router.post(`${commonConstants.GET_ONE}`, authFilter.verifyToken, schoolController.getOne);
router.post(`${commonConstants.INSERT}`, authFilter.verifyToken, schoolController.insert);
router.get(`${commonConstants.DELETE}`, authFilter.verifyToken, schoolController.delete);

module.exports = {
    schoolRouter: router
}