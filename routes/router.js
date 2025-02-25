const express = require("express");
const router = express.Router();
const controller = require('../controller/controller');

router.get("/", controller.index);

console.log(controller);
module.exports = router;