const UserDto = require('../domains/dtos/UserDto');
const User = require('../domains/models/User');
const { bcryptService } = require('../services/bcryptService');


const modelMapper = {
    userToDto(user) {
        let userDto = new UserDto();

        userDto.id = user.id;
        userDto.userTitle = user.user_title;
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
        user.userTitle = userDto.userTitle;
        user.username = userDto.username;
        user.userPass = bcryptService.hashPassword(userDto.userPass);
        user.email = userDto.email;
        user.phone = userDto.phone;
        user.lastLogin = userDto.lastLogin.toString();
        user.createdAt = userDto.createdAt;
        user.isActive = userDto.isActive;

        return user;
    }
}

module.exports = modelMapper;