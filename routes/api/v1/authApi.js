const express = require("express");
const router = express.Router();
const AUTH_C = require("../../../controllers").authController;
const { reqBody } = require("../../../middlewares");
const passport = require("passport");
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
router.post(
    "/login",
    // passport.authenticate("local", { failureRedirect: "/" }),
    (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next("Authentication failed");
            }
            req.login(user, (err) => {
                if (err) {
                    return next(err);
                }
                return next()
            });
        })(req, res, next);
    },
    AUTH_C.login
);

/*
 * PUT
 */
// router.put("/:id", AUTH_C.updateCar);

/*
 * DELETE
 */
// router.delete("/:id", AUTH_C.deleteCar);

module.exports = router;
