const UserDto = require('../domains/dtos/UserDto')

const modelMapper = {
    userToDto(user) {
        let userDto = new UserDto();

        userDto.id = user.id;
        userDto.userTitle = user.user_title;
        userDto.userName = user.user_name;
        userDto.userPass = user.user_pass;
        userDto.email = user.email;
        userDto.phone = user.phone;
        userDto.lastLogin = user.last_login.toString();
        userDto.createdAt = user.created_at;
        userDto.isActive = user.is_active;

        return userDto;
    }
}

module.exports = modelMapper;