const { postgresConnection, redis_client} = require("../db/db");
const { logElectricityConsumptionDalConstants } = require("./dalConstants");
const modelMapper = require("../utils/modelMapper");
const {redisConfig} = require("../configs/config");

const logElectricConsumptionDal = {
    async getAll() {
        const redisData = await redis_client.get('latestAllLogElectricConsumptions');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const result = await postgresConnection.db.query(logElectricityConsumptionDalConstants.GET_ALL_QUERY);
        redis_client.set('latestAllLogElectricConsumptions', JSON.stringify(result));
        redis_client.expire('latestAllLogElectricConsumptions', redisConfig.expirationTime);
        return result;
    },

    async getOne(id) {
        let query = logElectricityConsumptionDalConstants.GET_ONE_QUERY + `where id=${id}`;
        const classes = await postgresConnection.db.query(query);
        return modelMapper.classToDto(classes);
    },

    async insert(data) {
        let insertQuery = logElectricityConsumptionDalConstants.INSERT_QUERY + `values(${data.school_id }, ${data.class_id}, ${data.sensor_id}, '${data.sensor_data}', '${data.read_at}'`;
        return await postgresConnection.db.query(insertQuery);
    },

    async delete(id) {
        let deleteQuery = logElectricityConsumptionDalConstants.DELETE_QUERY + `id = ${id}`;
        return await postgresConnection.db.query(deleteQuery);
    }
}

module.exports = logElectricConsumptionDal;