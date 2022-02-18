const express = require("express");
const router = express.Router();

const auth = require("./authApi");
const user = require("./userApi");
const people = require("./peopleApi");
// const car = require("./carApi");
// const manufacture = require("./manufactureApi");

router.use("/auth", auth);
router.use("/users", user);
router.use("/peoples", people);
// router.use("/manufactures", manufacture);
// router.use("/cars", car);

module.exports = router;
