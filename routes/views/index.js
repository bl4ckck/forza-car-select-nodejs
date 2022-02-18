const express = require("express");
const router = express.Router();
const views = require("../../controllers").viewController;
const { sessionValidity, sessionLoginPage, isAdmin } = require("../../middlewares").authMdl;

router.get("/", sessionValidity, views.homeView);
router.get("/register", sessionLoginPage, views.registerView);
router.get("/login", sessionLoginPage, views.loginView);
router.get("/students", sessionValidity, isAdmin, views.studentView);

module.exports = router;
