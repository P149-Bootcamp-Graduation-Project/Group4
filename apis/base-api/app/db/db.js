const postgresConnection = require('./postgres')
const redis_client = require("./redis");

module.exports = {
    postgresConnection: postgresConnection,
    redis_client: redis_client
}