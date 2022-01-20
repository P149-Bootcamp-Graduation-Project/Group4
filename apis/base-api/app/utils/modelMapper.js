const UserDto = require('../domains/dtos/UserDto');
const User = require('../domains/models/User');
const UserRO = require('../domains/ros/UserRO');

const modelMapper = {
    userToDto(user) {
        let userDto = new UserDto();

        userDto.id = user.id;
        userDto.userTitle = user.user_title;
        userDto.userPass = user.user_pass;
        userDto.userName = user.user_name;
        userDto.email = user.email;
        userDto.phone = user.phone;
        userDto.lastLogin = user.last_login.toString();
        userDto.createdAt = user.created_at;
        userDto.isActive = user.is_active;

        return userDto;
    },

    dtoToUser(userDto) {
        let user = new User();

        user.id = userDto.id;
        user.user_title = userDto.userTitle;
        user.user_name = userDto.username;
        user.user_pass = userDto.userPass;
        user.email = userDto.email;
        user.phone = userDto.phone;
        user.last_login = userDto.lastLogin.toString();
        user.created_at = userDto.createdAt;
        user.is_active = userDto.isActive;

        return user;
    },

    userDtoToRO(userDto) {
        let userRO = new UserRO();

        userRO.id = userDto.id;
        userRO.userTitle = userDto.userTitle;
        userRO.username = userDto.username;
        userRO.email = userDto.email;
        userRO.phone = userDto.phone;
        userRO.lastLogin = userDto.lastLogin.toString();
        userRO.createdAt = userDto.createdAt;
        userRO.isActive = userDto.isActive;

        return userRO;
    }
}

module.exports = modelMapper;