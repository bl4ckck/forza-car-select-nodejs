const express = require("express");
const router = express.Router();
const { sessionValidity, isAdminAPI } = require("../../../middlewares").authMdl;

const auth = require("./authApi");
const user = require("./userApi");
const people = require("./peopleApi");

router.use("/auth", auth);
router.use("/users", sessionValidity, isAdminAPI, user);
router.use("/peoples", sessionValidity, isAdminAPI, people);

module.exports = router;
