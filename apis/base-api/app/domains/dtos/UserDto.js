class UserDto {
    constructor({id, user_title, user_name, user_pass, email, phone, last_login, created_at, is_active} = {}) {
        this.id = id;
        this.userTitle = user_title;
        this.userName = user_name;
        this.userPass = user_pass;
        this.email = email;
        this.phone = phone;
        this.lastLogin = last_login;
        this.createdAt = created_at;
        this.isActive = is_active;
    }
}

module.exports = UserDto;