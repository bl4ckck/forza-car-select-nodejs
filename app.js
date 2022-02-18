require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const morgan = require("morgan");
const cors = require("cors");

const passport = require("passport");

const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const cookieConfig = require("./config/cookies");

const { errMdl, authMdl } = require("./middlewares");
const { apiRoutes, viewRoutes } = require("./routes");

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("trust proxy", 1);

app.use(cookieParser());
app.use(cookieSession(cookieConfig));

passport.use(authMdl.localStrategy);

passport.serializeUser((user, done) => {
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

console.log("keygrip: ", process.env.KEY_GRIP);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});

module.exports = app;
