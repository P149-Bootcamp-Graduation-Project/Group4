const { mongoDbConfig } = require("../configs/config");
const {MongoClient} = require('mongodb');

const uri = `mongodb+srv://ivanbarayev:${mongoDbConfig.MONGO_PASS}@docdb.xmg8e.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function run() {
    try {
        await client.connect();
        await client.db("test").command({ ping: 1 });
        console.log("::> MongoDB Server is Ready");
    } catch(err) {
        throw new Error(err);
    }
}
run().catch(console.dir);

module.exports = {
    mongo_client: client
};
