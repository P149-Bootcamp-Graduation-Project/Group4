class UserRO {
    constructor({id, userTitle, userName, email, phone, lastLogin, createdAt, isActive} = {}) {
        this.id = id;
        this.userTitle  = userTitle;
        this.username  = userName;
        this.email  = email;
        this.phone = phone;
        this.lastLogin  = lastLogin;
        this.createdAt = createdAt;
        this.isActive = isActive;
    }
}

module.exports = UserRO;