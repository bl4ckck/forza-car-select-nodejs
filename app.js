require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const morgan = require("morgan");
const cors = require("cors");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const Keygrip = require('keygrip')
const session = require("express-session");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { bcryptHash } = require("./utils");

const { userModel } = require("./models");
const { errMdl } = require("./middlewares");
const { apiRoutes, viewRoutes } = require("./routes");

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(cookieParser());
app.use(
    cookieSession({
        secret: process.env.SESSION_SECRET,
        name: "_siam_sess",
        path: "/",
        httpOnly: true,
        // secure: true,
        maxAge: 60 * 60 * 1000, // 1
        keys: new Keygrip(['qwertyuiopasdfghjklzxcvbnm123456'], "SHA384", "base64"),
        signed: true,
    })
);

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        async (email, password, done) => {
            try {
                const user = await userModel.findOne({ email });
                const isValid = await bcrypt.compare(password, user.password);
                if (!user.email || !isValid) {
                    return done(null, false, {
                        message: "Username or password incorrect",
                    });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    console.log("serializeUser");
    const { id, role, email, name } = user;
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", apiRoutes);
app.use(viewRoutes);

app.use(errMdl.errorResponder);
app.use(errMdl.failSafeHandler);

const port = 5000;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});

module.exports = app;
