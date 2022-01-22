const { postgresConnection, redis_client} = require("../db/db");
const { userDalConstants } = require("./dalConstants");
const modelMapper = require("../utils/modelMapper");
const {redisConfig} = require("../configs/config");

const userDal = {
    async getAllUser() {
        const redisData = await redis_client.get('latestAllUsers');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const userList = await postgresConnection.db.query(userDalConstants.USER_LIST_QUERY);
        let userDtoList = [];
        userList.forEach(function (user) {
            const userDto = modelMapper.userToDto(user);
            userDtoList.push(userDto);
        });
        redis_client.set('latestAllUsers', JSON.stringify(userDtoList));
        redis_client.expire('latestAllUsers', redisConfig.expirationTime);
        return userDtoList;
    },

    async insert(user) {
        let insertQuery = userDalConstants.INSERT_QUERY;
        insertQuery = insertQuery.concat(`values('${user.user_title}', '${user.user_name}', '${user.user_pass}', '${user.email}', '${user.phone}', '${user.last_login}', ${user.is_active})`)
        return await postgresConnection.db.query(insertQuery);
    },

    async login(user) {
        let loginQuery = userDalConstants.LOGIN_QUERY + ` where user_name='${user.user_name}'`
        return await postgresConnection.db.query(loginQuery);
    }
}

module.exports = userDal;