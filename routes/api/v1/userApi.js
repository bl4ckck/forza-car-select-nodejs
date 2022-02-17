const express = require("express");
const router = express.Router();
const USER_C = require("../../../controllers").authController;
const { reqBody } = require("../../../middlewares")

/*
 * GET
 */
router.get("/", USER_C.findAllUsers);
/*
 * GET /manufacture
 */
// router.get("/rel/manufactures", USER_C.findAllCarManufacture);

/*
 * GET
 */
router.get("/:id", USER_C.findOneUser);

/*
 * GET
 */
// router.get("/rel/manufactures/:id", USER_C.findOneCarManufacture);

/*
 * PUT
 */
router.put("/:id", USER_C.updateUser);

/*
 * DELETE
 */
router.delete("/:id", USER_C.deleteUser);


module.exports = router;
