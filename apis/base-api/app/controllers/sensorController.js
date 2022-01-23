const { StatusCodes } = require('http-status-codes');
const sensorService = require('../services/sensorService');

exports.getAllSensors = async (req, res) => {
    try {
        const sensorDtoList = await sensorService.getAllSensors();
        res.json({data: sensorDtoList, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.getOneSensor = async (req, res) => {
    try {
        const id = req.params.id;
        const schoolDto = await sensorService.getOneSensor(id);
        res.json({data: schoolDto, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
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
        const sensorDto = req.body.sensor;
        const result = await sensorService.insert(sensorDto);
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
        const result = await sensorService.delete(id);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}