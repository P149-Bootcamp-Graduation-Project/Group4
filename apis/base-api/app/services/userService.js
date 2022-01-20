const userDal = require("../dals/userDal");
const modelMapper = require("../utils/modelMapper");
const bcryptService = require('./bcryptService');
const tokenDal = require("../dals/tokenDal");

const userService = {
    async getAllUser() {
        const userList = await userDal.getAllUser();
        let userDtoList = [];
        userList.forEach(function (user) {
            const userDto = modelMapper.userToDto(user);
            userDtoList.push(userDto);
        });
        return userDtoList;
    },

    async register(userDto) {
        userDto.userPass = bcryptService.hashPassword(userDto.userPass);
        const user = modelMapper.dtoToUser(userDto);
        await userDal.insert(user);
    },

    async login(userDto) {
        const user = await userDal.login(userDto);
        if(user === null) {
            throw new Error("User not found");
        } else {
            return tokenDal.getAccessToken();
        }
    },

    async logout(id, accessToken) {
        await tokenDal.deleteToken(id, accessToken);

        return true;
    }
}

module.exports = userService;