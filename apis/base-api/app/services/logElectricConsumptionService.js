const logElectricConsumptionDal = require('../dals/logElectricConsumptionDal');

const logElectricConsumptionService = {
    async getAll() {
        return await logElectricConsumptionDal.getAll();
    },

    async getOne(id) {
        return await logElectricConsumptionDal.getOne(id);
    },

    async insert(data) {
        return await logElectricConsumptionDal.insert(data);
    },

    async delete(id) {
        return await logElectricConsumptionDal.delete(id);
    }
}

module.exports = logElectricConsumptionService;