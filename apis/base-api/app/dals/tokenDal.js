const jwt = require('jsonwebtoken')
const {jwtConfig} = require('../configs/config');
const redis_client = require("../db/redis");
const TokenRO = require("../domains/ros/TokenRO");

const tokenDal = {
    getAccessToken(id) {
        const accessToken = jwt.sign({sub: id}, jwtConfig.secretKey, { expiresIn: jwtConfig.accessTokenExpirationTime});
        const refreshToken = this.generateRefreshToken(id);
        return new TokenRO({accessToken, refreshToken});
    },

    async generateRefreshToken(id) {
        const refreshToken = jwt.sign({sub: id},
            jwtConfig.secretKey,
            {expiresIn: jwtConfig.refreshTokenExpirationTime}
        );

        await redis_client.get(id.toString(), (err, data) => {
            if(err) throw err;

            redis_client.set(id.toString(), JSON.stringify({token: refresh_token}));
        });

        return refreshToken;
    },

    async deleteToken(id, accessToken) {
        // remove the refresh token
        await redis_client.del(id.toString());

        // blacklist current access token
        await redis_client.set('BL_' + id.toString(), accessToken);
    }
}

module.exports = tokenDal;