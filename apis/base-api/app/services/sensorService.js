const sensorDal = require('../dals/sensorDal');
const modelMapper = require("../utils/modelMapper");

const sensorService = {
    async getAllSensors() {
        return await sensorDal.getAllSensors();
    },

    async getOneSensor(id) {
        return await sensorDal.getOneSensor(id);
    },

    async insert(sensorDto) {
        const sensor = modelMapper.dtoToClass(sensorDto);
        return await sensorDal.insert(sensor);
    },

    async delete(id) {
        return await sensorDal.delete(id);
    }
}

module.exports = sensorService;