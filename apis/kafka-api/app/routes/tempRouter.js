//const homeController = require('../controllers/home/home');
const tempConsumer = require('./..controllers/consumers/tempConsumer')
const router = express.Router();

//Chain methods
//router.route('/home').post(homeIndex).get(homeIndexGet);
router.route("/").post(tempConsumer)

//HTTP METHODS
/*
POST
GET
PATCH/PUT
DELETE
OPTIONS
*/
module.exports = {
    router
};
