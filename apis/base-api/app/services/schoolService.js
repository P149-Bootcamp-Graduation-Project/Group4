const schoolDal = require('../dals/schoolDal');
const modelMapper = require("../utils/modelMapper");

const schoolService = {
    async getAllSchools() {
        return await schoolDal.getAllSchools();
    },

    async getOneSchool(id) {
        return await schoolDal.getOneSchool(id);
    },

    async insert(schoolDto) {
        const school = modelMapper.dtoToSchool(schoolDto);
        return await schoolDal.insert(school);
    },

    async delete(id) {
        return await schoolDal.delete(id);
    }
}

module.exports = schoolService;