const express = require("express");
const router = express.Router();

const car = require("./carApi");

router.use("/cars", car);

module.exports = router;
