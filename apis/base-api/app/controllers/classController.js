const { StatusCodes } = require('http-status-codes');
const classService = require('../services/classService');

exports.getAll = async (req, res) => {
    try {
        const classDtoList = await classService.getAllClasses();
        res.json({data: classDtoList, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
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
        const classDto = await classService.getOneClass(id);
        res.json({data: classDto, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
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
        const classDto = req.body.class;
        const result = await classService.insert(classDto);
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
        const result = await classService.delete(id);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}