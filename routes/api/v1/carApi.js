const express = require("express");
const router = express.Router();
const CAR_C = require("../../../controllers").carController;
const { reqBody } = require("../../../middlewares")

/*
 * GET
 */
router.get("/", CAR_C.findAllCar);
/*
 * GET /manufacture
 */
router.get("/get/manufactures", CAR_C.findAllCarManufacture);

/*
 * GET
 */
router.get("/:id", CAR_C.findOneCar);

/*
 * GET
 */
router.get("/get/manufactures/:id", CAR_C.findOneCarManufacture);

/*
 * GET
 */
router.get("/garage/cars", CAR_C.findAllCarGarage);

/*
 * GET
 */
router.get("/garage/cars/:id", CAR_C.findOneCarGarage);

/*
 * POST
 */
router.post("/", reqBody, CAR_C.insertCar);

/*
 * PUT
 */
router.put("/:id", CAR_C.updateCar);

/*
 * DELETE
 */
router.delete("/:id", CAR_C.deleteCar);


module.exports = router;
