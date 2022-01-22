const { createClient } = require('redis');
const redisConfig = require('../configs/redisConfig');
const url = `redis://:${redisConfig.db_password}@${redisConfig.db_host}:${redisConfig.db_port}/${redisConfig.db_index}`
redis_client = createClient({ url: url});

redis_client.on('connect',  async () => {
    try{
        await redis_client.select(Number(redisConfig.db_index));
    } catch(err) {
        throw new Error(err);
    }
    console.log('::> Redis Server is Ready');
});
redis_client.on('error', (err) => console.log('<:: Redis Client Error', err));

(async () => {
    await redis_client.connect();
})();

module.exports = redis_client;