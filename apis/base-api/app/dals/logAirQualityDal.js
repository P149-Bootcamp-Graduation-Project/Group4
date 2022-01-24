const { postgresConnection, redis_client} = require("../db/db");
const { logAirQualityDalConstants } = require("./dalConstants");
const {redisConfig} = require("../configs/config");

const logAirQualityDal = {
    async getAll() {
        const redisData = await redis_client.get('latestAllLogAirQualities');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const result = await postgresConnection.db.query(logAirQualityDalConstants.GET_ALL_QUERY);
        redis_client.set('latestAllLogAirQualities', JSON.stringify(result));
        redis_client.expire('latestAllLogAirQualities', redisConfig.expirationTime);
        return result;
    },

    async getOne(id) {
        let query = logAirQualityDalConstants.GET_ONE_QUERY + `where id=${id}`;
        return await postgresConnection.db.query(query);
    },

    async insert(data) {
        let insertQuery = logAirQualityDalConstants.INSERT_QUERY + `values(${data.school_id }, ${data.class_id}, ${data.sensor_id}, '${data.sensor_data}', '${data.read_at}'`;
        return await postgresConnection.db.query(insertQuery);
    },

    async delete(id) {
        let deleteQuery = logAirQualityDalConstants.DELETE_QUERY + `id = ${Number(id)}`;
        return await postgresConnection.db.query(deleteQuery);
    }
}

module.exports = logAirQualityDal;