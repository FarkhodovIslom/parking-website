const express = require("express");
const router = express.Router();
const controller = require('../controller/controller');

router.get("/", controller.index);
router.get("/cars", controller.getCars);

console.log(controller);
module.exports = router;