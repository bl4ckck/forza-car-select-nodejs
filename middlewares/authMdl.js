const { People, User } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Passport local strategy middleware
const localStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        try {
            const dataValues = await User.findOne({
                attributes: ["id", "email", "password", "roles"],
                include: [
                    {
                        model: People,
                        attributes: ["name", "phone", "avatar"],
                    },
                ],
                raw: true,
                where: { email },
            });
            const isValid = await bcrypt.compare(password, dataValues.password);

            if (!dataValues.email || !isValid) {
                return done(null, false, {
                    message: "Username or password incorrect",
                });
            }

            delete dataValues["password"];
            return done(null, dataValues);
        } catch (err) {
            return done(err);
        }
    }
);

// Passport local middleware checking
const loginMethod = (req, res, next, isRedirect) => {
    const msg = "Authentication failed";
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return isRedirect ? res.redirect(`/login?error=${msg}`) : next(err);
        }
        if (!user) {
            return isRedirect ? res.redirect(`/login?error=${msg}`) : next(msg);
        }
        // Do Login
        req.login(user, (err) => {
            if (err) {
                return isRedirect
                    ? res.redirect(`/login?error=${msg}`)
                    : next(err);
            }
            return isRedirect ? res.redirect("/") : next();
        });
    })(req, res, next);
};

// Login API
const onLogin = (req, res, next) => loginMethod(req, res, next, false);
// Login View
const onLoginRedirect = (req, res, next) => loginMethod(req, res, next, true);

// Check if user is logged in
const sessionValidity = (req, res, next) => {
    console.log(req.session);
    console.log(req.cookies);
    return req.session.passport ? next() : res.redirect("/login");
};
// Check if session exist, then user can't access login page
const sessionLoginPage = (req, res, next) =>
    req.session.passport ? res.redirect("/") : next();

// Session Admin
const isAdmin = (req, res, next) => {
    const { roles } = req.session.passport.user;
    return roles === "ADMIN" ? next() : res.redirect("/");
}
const isAdminAPI = (req, res, next) => {
    const { roles } = req.session.passport.user;
    return roles === "ADMIN" ? next() : next("Authorization failed");
}

module.exports = {
    localStrategy,
    onLogin,
    onLoginRedirect,
    sessionValidity,
    sessionLoginPage,
    isAdmin,
    isAdminAPI,
};
