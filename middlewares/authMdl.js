const { People, User } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

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
                        attributes: ["name", "avatar"],
                    },
                ],
                raw: true,
                where: { email },
            });
            console.log(dataValues);
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

const loginMethod = (req, res, next, isRedirect) => {
    // passport.authenticate("local", { failureRedirect: "/" }),
    passport.authenticate("local", (err, user, info) => {
        console.log(user);
        const msg = "Authentication failed";
        if (err) {
            return isRedirect ? res.redirect(`/login?error=${msg}`) : next(err);
        }
        if (!user) {
            return isRedirect ? res.redirect(`/login?error=${msg}`) : next(msg);
        }
        req.login(user, (err) => {
            if (err) {
                return isRedirect
                    ? res.redirect(`/login?error=${msg}`)
                    : next(err);
            }
            return isRedirect ? res.redirect("/") : next(err);
        });
    })(req, res, next);
};

const onLogin = (req, res, next) => loginMethod(req, res, next, false);
const onLoginRedirect = (req, res, next) => loginMethod(req, res, next, true);

const sessionValidity = (req, res, next) => {
    console.log("coba", req.session);
    console.log(req.cookies);
    return req.session.passport ? next() : res.redirect("/login");
};
const sessionLoginPage = (req, res, next) =>
    req.session.passport ? res.redirect("/") : next();

const isAdmin = (req, res, next) => {
    const { roles } = req.session.passport.user;
    return roles === "ADMIN" ? next() : res.redirect("/");
}

module.exports = {
    localStrategy,
    onLogin,
    onLoginRedirect,
    sessionValidity,
    sessionLoginPage,
    isAdmin
};
