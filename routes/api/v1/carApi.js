const express = require("express");
const router = express.Router();
const {
    findAllCar,
    findAllCarTest,
    findAllCarGarage,
    findOneCar,
    findOneCarGarage,
    createCarGarage,
    createCarGarageRedirect,
} = require("../../../controllers").carController;

/*
 * GET
 */
router.get("/", findAllCar);

/*
 * GET TEST
 */
router.get("/test/cars", findAllCarTest);

/*
 * GET
 */
router.get("/:id", findOneCar);

/*
 * GET
 */
router.get("/garage/cars", findAllCarGarage);

/*
 * GET
 */
router.get("/garage/cars/:id", findOneCarGarage);

/*
 * POST
 */
router.post("/", createCarGarage);

/*
 * POST
 */
router.post("/redirect", createCarGarageRedirect);

module.exports = router;
