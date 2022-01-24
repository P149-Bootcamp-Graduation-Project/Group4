const jwt = require('jsonwebtoken')
const {jwtConfig} = require('../configs/config');
const redis_client = require("../db/redis");
const TokenRO = require("../domains/ros/TokenRO");

const tokenDal = {
    getAccessToken(id) {
        let tokenRO = new TokenRO();
        tokenRO.accessToken = jwt.sign({sub: id}, jwtConfig.secretKey, { expiresIn: jwtConfig.accessTokenExpirationTime});
        tokenRO.refreshToken = this.generateRefreshToken(id);
        return tokenRO;
    },

    generateRefreshToken(id) {
        const refreshToken = jwt.sign({sub: id},
            jwtConfig.secretKey,
            {expiresIn: jwtConfig.refreshTokenExpirationTime}
        );

        try{
            redis_client.set(id, refreshToken);
        }catch (err) {
            throw new Error("err");
        }

        return refreshToken;
    },

    async deleteToken(id, accessToken) {
        // remove the refresh token
        await redis_client.del(id);

        // blacklist current access token
        await redis_client.set('BL_' + id.toString(), accessToken);
    }
}

module.exports = tokenDal;