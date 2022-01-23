const logAirQualityDal = require('../dals/logAirQualityDal');

const logAirQualityService = {
    async getAll() {
        return await logAirQualityDal.getAll();
    },

    async getOne(id) {
        return await logAirQualityDal.getOne(id);
    },

    async insert(data) {
        return await logAirQualityDal.insert(data);
    },

    async delete(id) {
        return await logAirQualityDal.delete(id);
    }
}

module.exports = logAirQualityService;