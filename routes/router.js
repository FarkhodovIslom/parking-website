const express = require("express");
const router = express.Router();
const controller = require('../controller/controller');

router.get("/", controller.index);
router.get("/cars", controller.getCars);
router.get("/cars/:id", controller.getCarById);

router.post("/", controller.postNewCar);

router.delete("/cars/:id", controller.deleteCar);

module.exports = router;