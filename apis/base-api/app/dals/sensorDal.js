const { postgresConnection, redis_client} = require("../db/db");
const { sensorDalConstants } = require("./dalConstants");
const {redisConfig} = require("../configs/config");

const sensorDal = {
    async getAllSensors() {
        const redisData = await redis_client.get('latestAllSensors');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const sensorList = await postgresConnection.db.query(sensorDalConstants.GET_ALL_QUERY);
        redis_client.set('latestAllSensors', JSON.stringify(sensorList));
        redis_client.expire('latestAllSensors', redisConfig.expirationTime);
        return sensorList;
    },

    async getOneSensor(id) {
        let query = sensorDalConstants.GET_ONE_QUERY + `where id=${id}`;
        return await postgresConnection.db.query(query);
    },

    async insert(sensor) {
        let insertQuery = sensorDalConstants.INSERT_QUERY + `values('${sensor.school_id}', '${sensor.class_id}', ${sensor.sensor_name}, ${sensor.detail}, ${sensor.default_protocol}, '${sensor.default_ip}', '${sensor.default_port}', '${sensor.default_channel}', '${sensor.connected_at}', '${sensor.created_by}', '${sensor.is_online}', '${sensor.is_active}'`;
        return await postgresConnection.db.query(insertQuery);
    },

    async delete(id) {
        let deleteQuery = sensorDalConstants.DELETE_QUERY + `id = ${id}`;
        return await postgresConnection.db.query(deleteQuery);
    }
}
module.exports = sensorDal;