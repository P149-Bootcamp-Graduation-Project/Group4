const bcrypt = require('bcrypt');
const { bcryptConfig } = require('../configs/config');

const bcryptService = {
    async hashPassword(password) {
        const salt = bcrypt.genSalt(bcryptConfig.bcryptRound);
        return await bcrypt.hash(password, salt);
    },

    async verifyPassword(hash, password) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = bcryptService;