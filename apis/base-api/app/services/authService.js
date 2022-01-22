const { verifyToken, verifyRefreshToken } = require('../middleware/authFilter');
const tokenDal = require('../dals/tokenDal');

const authService = {
    verifyToken(req, res, next) {
        return verifyToken(req, res, next);
    },

    verifyRefreshToken(req, res, next) {
        return verifyRefreshToken(req, res, next);
    },

    getAccessToken(id) {
        return tokenDal.getAccessToken(id);
    }
}

module.exports = authService;