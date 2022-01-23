const { postgresConnection, redis_client} = require("../db/db");
const { schoolDalConstants } = require("./dalConstants");
const modelMapper = require("../utils/modelMapper");
const {redisConfig} = require("../configs/config");

const schoolDal = {
    async getAllSchools() {
        const redisData = await redis_client.get('latestAllSchools');
        if(redisData !== null) {
            return JSON.parse(redisData);
        }
        const schoolList = await postgresConnection.db.query(schoolDalConstants.SCHOOL_LIST_QUERY);
        let schoolDtoList = [];
        schoolList.forEach(function (school) {
            const schoolDto = modelMapper.schoolToDto(school);
            schoolDtoList.push(schoolDto);
        });
        redis_client.set('latestAllSchools', JSON.stringify(schoolDtoList));
        redis_client.expire('latestAllSchools', redisConfig.expirationTime);
        return schoolDtoList;
    },

    async getOneSchool(id) {
        let query = schoolDalConstants.SCHOOL_LIST_QUERY + `where id=${id}`;
        const school = await postgresConnection.db.query(query);
        return modelMapper.schoolToDto(school);
    },

    async insert(school) {
        let insertQuery = schoolDalConstants.INSERT_QUERY;
        insertQuery = insertQuery + `values('${school.school_name}', '${school.detail}', ${school.city_id}, ${school.total_class}, ${school.created_by}, '${school.is_active }'`;
        return await postgresConnection.db.query(insertQuery);
    },

    async delete(id) {
        let deleteQuery = schoolDalConstants.DELETE_QUERY + `id = ${id}`;
        return await postgresConnection.db.query(deleteQuery);
    }
}

module.exports = schoolDal;