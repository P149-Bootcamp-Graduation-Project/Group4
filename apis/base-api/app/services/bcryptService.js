const bcrypt = require('bcrypt');
const { bcryptConfig } = require('../configs/config');

const bcryptService = {
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(Number(bcryptConfig.bcryptRound));
        return await bcrypt.hash(password, salt);
    },

    async verifyPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = bcryptService;