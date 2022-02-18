const express = require("express");
const router = express.Router();
const USER_C = require("../../../controllers").authController;

/*
 * GET
 */
router.get("/", USER_C.findAllUsers);

/*
 * GET
 */
router.get("/:id", USER_C.findOneUser);

/*
 * PUT
 */
router.put("/:id", USER_C.updateUser);

/*
 * DELETE
 */
router.delete("/:id", USER_C.deleteUser);


module.exports = router;
