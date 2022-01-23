const { StatusCodes } = require('http-status-codes');
const logElectricConsumptionService = require('../services/logElectricConsumptionService');

exports.getAll = async (req, res) => {
    try {
        const result = await logElectricConsumptionService.getAll();
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
        const result = await logElectricConsumptionService.getOne(id);
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
        const data = req.body.logElectricConsumption;
        const result = await logElectricConsumptionService.insert(data);
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
        const result = await logElectricConsumptionService.delete(id);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}