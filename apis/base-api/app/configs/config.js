const serverConfig = require('./serverConfig');
const postgresConfig = require('./postgresConfig');
const redisConfig = require("./redisConfig");
const jwtConfig = require("./jwtConfig");
const bcryptConfig = require("./bcryptConfig");


module.exports = {
    serverConfig: serverConfig,
    postgresConfig: postgresConfig,
    redisConfig: redisConfig,
    jwtConfig: jwtConfig,
    bcryptConfig: bcryptConfig
}