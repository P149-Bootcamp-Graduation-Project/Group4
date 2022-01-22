const serverConfig = require('./serverConfig');

serverConfig.installServerConfigs();

module.exports = {
    MONGO_ATLAS_URI: process.env.MONGO_ATLAS_URI,
    MONGO_DEFAULT_DB: process.env.MONGO_DEFAULT_DB,
    MONGO_PASS: process.env.MONGO_PASS
}
