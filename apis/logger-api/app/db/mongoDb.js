const config = require("../configs/config");
const {MongoClient} = require('mongodb');

const uri = config.mongoDbConfig.MONGO_ATLAS_URI
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
try {
    client.connect();
    console.log("::> MongoDB Server is Ready");
} catch(err) {
    throw new Error(err);
}

exports.mongo_client = client;
