const userDal = require("../dals/userDal");
const modelMapper = require("../utils/modelMapper");
const bcryptService = require('./bcryptService');
const tokenDal = require("../dals/tokenDal");

const userService = {
    async getAllUser() {
        return await userDal.getAllUser();
    },

    async register(userDto) {
        userDto.userPass = await bcryptService.hashPassword(userDto.userPass);
        const user = modelMapper.dtoToUser(userDto);
        await userDal.insert(user);
    },

    async login(userDto) {
        let user = modelMapper.dtoToUser(userDto);
        user = await userDal.login(user);
        const bool = await bcryptService.verifyPassword(userDto.userPass, user[0].user_pass);
        if(user === null || !bool) {
            throw new Error("User not found");
        } else {
            return tokenDal.getAccessToken(user[0].id);
        }
    },

    logout(id, accessToken) {
        tokenDal.deleteToken(id, accessToken);

        return true;
    }
}

module.exports = userService;