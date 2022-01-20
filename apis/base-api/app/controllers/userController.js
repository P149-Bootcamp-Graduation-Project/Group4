const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');
const modelMapper = require("../utils/modelMapper");
const UserDto = require("../domains/dtos/UserDto");

exports.getAllUser = async (req, res) => {
    try {
        const userDtoList = await userService.getAllUser();
        res.json({data: userDtoList, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.register = async (req, res) => {
    try {
        const userDto = req.body.user;
        await userService.register(userDto);
        const userRO = modelMapper.userDtoToRO(userDto);
        res.json({user: userRO, code: "SUCCESS", message: "Registered successfully.", timestamp: Date.now()}).status(StatusCodes.CREATED);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.login = (req, res) => {
    try {
        const userDto = new UserDto();
        userDto.userName = req.body.username;
        userDto.userPass = req.body.password;
        const tokenRO = userService.login(userDto);
        res.json({data: tokenRO, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.login = async (req, res) => {
    try {
        const id = req.body.id;
        const accessToken = req.body.accessToken;

        const bool = await userService.logout(id, accessToken);

        res.json({res: bool, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.OK);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}