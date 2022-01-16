const { postgresConnection } = require("../db/db");
const { userDalConstants } = require("./dalConstants");

const userDal = {
    async getAllUser() {
        return await postgresConnection.db.query(userDalConstants.USER_LIST_QUERY);
    }
}

module.exports = userDal;