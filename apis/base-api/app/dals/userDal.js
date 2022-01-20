const { postgresConnection } = require("../db/db");
const { userDalConstants } = require("./dalConstants");
const stringInject = require('stringinject');

const userDal = {
    async getAllUser() {
        return await postgresConnection.db.query(userDalConstants.USER_LIST_QUERY);
    },

    async insert(user) {
        let insertQuery = userDalConstants.INSERT_QUERY;
        insertQuery = insertQuery.concat(`values(${user.user_title}, ${user.user_name}, ${user.user_pass}, ${user.email}, ${user.phone}, ${user.last_login}, ${user.is_active})`)
        return await postgresConnection.db.query(insertQuery);
    },

    async login(userDto) {
        let loginQuery = stringInject(userDalConstants.LOGIN_QUERY, [userDto.userName, userDto.userPass]);
        return await postgresConnection.db.query(loginQuery);
    }
}

module.exports = userDal;