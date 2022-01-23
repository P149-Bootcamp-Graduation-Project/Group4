const { StatusCodes } = require('http-status-codes');
const logAirQualityService = require('../services/logAirQualityService');

exports.getAll = async (req, res) => {
    try {
        const result = await logAirQualityService.getAll();
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await logAirQualityService.getOne(id);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.insert = async (req, res) => {
    try {
        const data = req.body.logAirQuality;
        const result = await logAirQualityService.insert(data);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await logAirQualityService.delete(id);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}