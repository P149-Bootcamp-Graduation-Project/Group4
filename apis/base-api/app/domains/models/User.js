class User {
    constructor({id, userTitle, userName, userPass, email, phone, lastLogin, createdAt, isActive} = {}) {
        this.id = id;
        this.userTitle = userTitle;
        this.userName = userName;
        this.userPass = userPass;
        this.email = email;
        this.phone = phone;
        this.lastLogin = lastLogin;
        this.createdAt = createdAt;
        this.isActive = isActive;
    }
}

module.exports = User;