const serverConfig = require('./serverConfig');

serverConfig.installServerConfigs();

module.exports = {
    db_username: process.env.PG_DB_USERNAME,
    db_password: process.env.PG_DB_PASSWORD,
    db_host: process.env.PG_DB_HOST,
    db_port: process.env.PG_DB_PORT,
    db_name: process.env.PG_DB_NAME
}