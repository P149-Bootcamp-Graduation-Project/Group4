const postgresConnection = require('./postgres')
const {mongo_client} = require("./mongoDb");

module.exports = {
    postgresConnection: postgresConnection,
    mongo_client: mongo_client
}