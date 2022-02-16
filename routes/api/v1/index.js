const express = require("express");
const router = express.Router();

const auth = require("./authApi");
const car = require("./carApi");
const manufacture = require("./manufactureApi");

router.use("/auth", auth);
router.use("/manufactures", manufacture);
router.use("/cars", car);

module.exports = router;
