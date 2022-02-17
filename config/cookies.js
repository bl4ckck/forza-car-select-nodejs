require("dotenv").config();
const Keygrip = require("keygrip");

const cookieConfig = {
    secret: process.env.SESSION_SECRET,
    name: "_siam_sess",
    path: "/",
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000, // 1
    keys: new Keygrip([process.env.KEY_GRIP], "SHA384", "base64"),
    signed: true,
};

module.exports = cookieConfig;
