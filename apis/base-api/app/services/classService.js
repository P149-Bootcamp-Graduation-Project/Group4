const classDal = require('../dals/classDal');
const modelMapper = require("../utils/modelMapper");

const classService = {
    async getAllClasses() {
        return await classDal.getAllClasses();
    },

    async getOneClass(id) {
        return await classDal.getOneClass(id);
    },

    async insert(classDto) {
        const classes = modelMapper.dtoToClass(classDto);
        return await classDal.insert(classes);
    },

    async delete(id) {
        return await classDal.delete(id);
    }
}

module.exports = classService;