const { mongo_client } = require('../db/db')
exports.getDatabase = async (req, res, next) => {
    try {
        const ping = await mongo_client.db("test").command({ping: 1});
        res.json({data: ping, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}