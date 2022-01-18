const {mongoConnection} = require('../db/db')
exports.getDatabase = async (req, res, next) => {
    try {
        const databases = await mongoConnection.client.db().admin().listDatabases
        res.json({data: databases, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}