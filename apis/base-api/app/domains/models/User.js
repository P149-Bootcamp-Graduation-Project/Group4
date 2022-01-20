class User {
    constructor({id, userTitle, userName, userPass, email, phone, lastLogin, createdAt, isActive} = {}) {
        this.id = id;
        this.user_title  = userTitle;
        this.user_name  = userName;
        this.user_pass = userPass;
        this.email  = email;
        this.phone = phone;
        this.last_login  = lastLogin;
        this.created_at = createdAt;
        this.is_active = isActive;
    }
}

module.exports = User;