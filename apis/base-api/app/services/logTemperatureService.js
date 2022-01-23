const logTemperatureDal = require('../dals/logTemperatureDal');

const logTemperatureService = {
    async getAll() {
        return await logTemperatureDal.getAll();
    },

    async getOne(id) {
        return await logTemperatureDal.getOne(id);
    },

    async insert(data) {
        return await logTemperatureDal.insert(data);
    },

    async delete(id) {
        return await logTemperatureDal.delete(id);
    }
}

module.exports = logTemperatureService;