require("dotenv").config();
const Keygrip = require("keygrip");
const maxAgeCookie = 60 * 60 * 1000;

const cookieConfig = {
    secret: process.env.SESSION_SECRET,
    name: "_siam_sess",
    path: "/",
    httpOnly: true,
    sameSite: 'none',
    secure: process.env.NODE_ENV === "production",
    maxAge: maxAgeCookie,
    expires: new Date(Date.now() + maxAgeCookie),
    keys: new Keygrip([process.env.KEY_GRIP], "SHA384", "base64"),
    signed: true,
};

module.exports = cookieConfig;
