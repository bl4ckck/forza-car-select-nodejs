const express = require("express");
const router = express.Router();
const MANUFACTURE_C = require("../../../controllers").manufactureController;
const { reqBody } = require("../../../middlewares")

/*
 * GET
 */
router.get("/", MANUFACTURE_C.findAllManufacture);

/*
 * GET
 */
router.get("/:id", MANUFACTURE_C.findOneManufacture);

/*
 * POST
 */
router.post("/", reqBody, MANUFACTURE_C.insertManufacture);

/*
 * PUT
 */
router.put("/:id", MANUFACTURE_C.updateManufacture);

/*
 * DELETE
 */
router.delete("/:id", MANUFACTURE_C.deleteManufacture);


module.exports = router;
