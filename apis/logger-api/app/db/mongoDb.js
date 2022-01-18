const config = require("../configs/config");
const {MongoClient} = require('mongodb');

const uri = config.mongoDbConfig.MONGO_ATLAS_URI
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("::> MongoDB Server is Ready");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

exports.mongo_client = client