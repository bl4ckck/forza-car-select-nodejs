const express = require("express");
const router = express.Router();
const AUTH_C = require("../../../controllers").authController;
const { reqBody, authMdl } = require("../../../middlewares");

/*
 * GET
 */
// router.get("/", AUTH_C.findAllCar);

/*
 * GET
 */
// router.get("/:id", AUTH_C.findOneCar);

/*
 * REGISTER
 */
router.post("/register", reqBody, AUTH_C.register);

/*
 * LOGIN
 */
router.post("/login", authMdl.onLogin, AUTH_C.login);

/*
 * PUT
 */
// router.put("/:id", AUTH_C.updateCar);

/*
 * DELETE
 */
// router.delete("/:id", AUTH_C.deleteCar);

module.exports = router;
