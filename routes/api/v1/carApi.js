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
router.get("/rel/manufactures", CAR_C.findAllCarManufacture);

/*
 * GET
 */
router.get("/:id", CAR_C.findOneCar);

/*
 * GET
 */
router.get("/rel/manufactures/:id", CAR_C.findOneCarManufacture);

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
