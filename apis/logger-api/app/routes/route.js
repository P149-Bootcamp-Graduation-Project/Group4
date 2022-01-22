const express = require("express")
const mongoController = require('../controller/mongoController');
const router = express.Router();

router.get(`/getAll`, mongoController.getAll);
router.get(`/getOne/:id`, mongoController.getOne);
router.get(`/delete/:id`, mongoController.deleteOne);
router.post(`/updateOne/:id`, mongoController.updateOne);
router.post(`/insertOne`, mongoController.insertOne);

module.exports = router;