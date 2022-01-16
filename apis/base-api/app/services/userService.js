const userDal = require("../dals/userDal");
const modelMapper = require("../utils/modelMapper");

const userService = {
    async getAllUser() {
        const userList = await userDal.getAllUser();
        let userDtoList = [];
        userList.forEach(function (user) {
            const userDto = modelMapper.userToDto(user);
            userDtoList.push(userDto);
        });
        return userDtoList;
    }
}

module.exports = userService;