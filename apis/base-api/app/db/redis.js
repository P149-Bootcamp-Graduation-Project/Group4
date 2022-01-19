const redis = require('redis');
const {redisConfig} = require('../configs/config');

// connect to redis
const redis_client = redis.createClient(redisConfig.db_port, redisConfig.db_host);

redis_client.on('connect', function () {
    redis_client.select(3);
    console.log('Connected to Redis');
});

module.exports = redis_client;