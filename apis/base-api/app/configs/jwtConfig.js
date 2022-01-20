const serverConfig = require('./serverConfig');

serverConfig.installServerConfigs();

module.exports = {
    secretKey: process.env.JWT_SECRET,
    accessTokenExpirationTime: process.env.JWT_ACCESS_TOKEN_TIME,
    refreshTokenExpirationTime: process.env.JWT_REFRESH_TOKEN_TIME
}