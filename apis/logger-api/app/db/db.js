const mongoConnection = require('./mongoDb')

module.exports = {
    mongo_client: mongoConnection.mongo_client
}