const express = require("express");
const router = express.Router();

const auth = require("./authApi");
const user = require("./userApi");
// const car = require("./carApi");
// const manufacture = require("./manufactureApi");

router.use("/auth", auth);
router.use("/users", user);
// router.use("/manufactures", manufacture);
// router.use("/cars", car);

module.exports = router;
