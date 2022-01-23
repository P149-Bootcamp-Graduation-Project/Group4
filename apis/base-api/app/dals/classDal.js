const { postgresConnection, redis_client} = require("../db/db");
const { classDalConstants } = require("./dalConstants");
const modelMapper = require("../utils/modelMapper");
const {redisConfig} = require("../configs/config");

const classDal = {
    async getAllClasses() {
        const redisData = await redis_client.get('latestAllClasses');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const classList = await postgresConnection.db.query(classDalConstants.CLASS_LIST_QUERY);
        let classDtoList = [];
        classList.forEach(function (classes) {
            const classDto = modelMapper.classToDto(classes);
            classDtoList.push(classDto);
        });
        redis_client.set('latestAllClasses', JSON.stringify(classDtoList));
        redis_client.expire('latestAllClasses', redisConfig.expirationTime);
        return classDtoList;
    },

    async getOneClass(id) {
        let query = classDalConstants.GET_CLASS_QUERY + `where id=${id}`;
        const classes = await postgresConnection.db.query(query);
        return modelMapper.classToDto(classes);
    },

    async insert(classes) {
        let insertQuery = classDalConstants.INSERT_QUERY + `values(${classes.school_id}, ${classes.floor_num}, '${classes.class_name}', '${classes.detail}', ${classes.created_by}, '${classes.is_active}'`;
        return await postgresConnection.db.query(insertQuery);
    },

    async delete(id) {
        let deleteQuery = classDalConstants.DELETE_QUERY + `id = ${id}`;
        return await postgresConnection.db.query(deleteQuery);
    }
}

module.exports = classDal;