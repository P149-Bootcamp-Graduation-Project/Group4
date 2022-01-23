const { postgresConnection, redis_client} = require("../db/db");
const { logTemperatureDalConstants } = require("./dalConstants");
const {redisConfig} = require("../configs/config");

const logTemperatureDal = {
    async getAll() {
        const redisData = await redis_client.get('latestAllLogTemperatures');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const result = await postgresConnection.db.query(logTemperatureDalConstants.GET_ALL_QUERY);
        redis_client.set('latestAllLogTemperatures', JSON.stringify(result));
        redis_client.expire('latestAllLogTemperatures', redisConfig.expirationTime);
        return result;
    },

    async getOne(id) {
        let query = logTemperatureDalConstants.GET_ONE_QUERY + `where id=${id}`;
        return await postgresConnection.db.query(query);
    },

    async insert(data) {
        let insertQuery = logTemperatureDalConstants.INSERT_QUERY + `values(${data.school_id }, ${data.class_id}, ${data.sensor_id}, '${data.sensor_data}', '${data.read_at}'`;
        return await postgresConnection.db.query(insertQuery);
    },

    async delete(id) {
        let deleteQuery = logTemperatureDalConstants.DELETE_QUERY + `id = ${id}`;
        return await postgresConnection.db.query(deleteQuery);
    }
}

module.exports = logTemperatureDal;