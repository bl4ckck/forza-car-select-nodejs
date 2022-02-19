const express = require("express");
const router = express.Router();
const VIEWS = require("../../controllers").ViewController;
const { sessionValidity, sessionLoginPage, isAdmin } = require("../../middlewares").authMdl;

router.get("/", sessionValidity, VIEWS.homeView);
router.get("/register", sessionLoginPage, VIEWS.registerView);
router.get("/login", sessionLoginPage, VIEWS.loginView);
router.get("/students", sessionValidity, isAdmin, VIEWS.studentView);
router.get("/settings", sessionValidity, VIEWS.profileView);

module.exports = router;
