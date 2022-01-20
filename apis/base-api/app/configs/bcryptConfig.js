const serverConfig = require('./serverConfig');

serverConfig.installServerConfigs();

module.exports = {
    bcryptRound: process.env.BCRYPT_ROUND
}