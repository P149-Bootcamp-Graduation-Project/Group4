const serverConfig = require('./serverConfig');

serverConfig.installServerConfigs();

module.exports = {
    db_host: process.env.REDIS_HOST,
    db_port: process.env.REDIS_PORT,
    db_password: process.env.REDIS_PASSWORD,
    db_index: process.env.REDIS_DB_INDEX
}