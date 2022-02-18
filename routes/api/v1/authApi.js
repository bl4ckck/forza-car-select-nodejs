const express = require("express");
const router = express.Router();
const AUTH_C = require("../../../controllers").authController;
const { reqBody, authMdl } = require("../../../middlewares");

/*
 * REGISTER
 */
router.post("/register", reqBody, AUTH_C.register);

/*
 * LOGIN
 */
router.post("/login", authMdl.onLogin, AUTH_C.login);
router.post("/login/redirect", authMdl.onLoginRedirect);

/*
 * LOGOUT
 */
router.get("/logout", authMdl.sessionValidity, AUTH_C.logout);


module.exports = router;
