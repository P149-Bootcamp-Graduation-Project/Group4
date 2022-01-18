const express = require("express")
const mongoController = require('../controller/mongoController');
const router = express.Router();

router.get(`/mongo`, mongoController.getDatabase);

module.exports = router;