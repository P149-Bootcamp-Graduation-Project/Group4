const serverConfig = require('./serverConfig');

serverConfig.installServerConfigs();

module.exports = {
    bcryptRound: Number(String(process.env.BCRYPT_ROUND))
}