const jwt = require('jsonwebtoken');
const redis_client = require('../db/redis');
const { jwtConfig } = require('../configs/config');

function verifyToken(req, res, next) {
    try {
        // Bearer tokenstring
        const token = req.headers.authorization.split(' ')[1];

        const decoded = jwt.verify(token, jwtConfig.secretKey);
        req.userData = decoded;

        req.token = token;

        // verify blacklisted access token.
        redis_client.get('BL_' + decoded.sub.toString(), (err, data) => {
            if(err) throw err;

            if(data === token) return res.status(401).json({status: false, message: "blacklisted token."});
            next();
        })
    } catch (error) {
        return res.status(401).json({status: false, message: "Your session is not valid.", data: error});
    }
}

function verifyRefreshToken(req, res, next) {
    const token = req.body.token;

    if(token === null) return res.status(401).json({status: false, message: "Invalid request."});
    try {
        const decoded = jwt.verify(token, jwtConfig.secretKey);
        req.userData = decoded;

        // verify if token is in store or not
        redis_client.get(decoded.sub.toString(), (err, data) => {
            if(err) throw err;

            if(data === null) return res.status(401).json({status: false, message: "Invalid request. Token is not in store."});
            if(JSON.parse(data).token !== token) return res.status(401).json({status: false, message: "Invalid request. Token is not same in store."});

            next();
        })
    } catch (error) {
        return res.status(401).json({status: true, message: "Your session is not valid.", data: error});
    }
}

module.exports = {
    verifyToken,
    verifyRefreshToken
}