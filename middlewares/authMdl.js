const { User } = require("../models");
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
            const { dataValues } = await User.findOne({
                attributes: ['id', 'email', 'password', 'roles'],
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

const onLogin = (req, res, next) => {
    // passport.authenticate("local", { failureRedirect: "/" }),
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
            return next();
        });
    })(req, res, next);
};

module.exports = { localStrategy, onLogin };
