const { StatusCodes } = require('http-status-codes');
const schoolService = require('../services/schoolService');

exports.getAllSchools = async (req, res) => {
    try {
        const schoolDtoList = await schoolService.getAllSchools();
        res.json({data: schoolDtoList, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
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
        const schoolDto = await schoolService.getOneSchool(id);
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
        const schoolDto = req.body.school;
        const result = await schoolService.insert(schoolDto);
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
        const result = await schoolService.delete(id);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}