const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hash = async (plain) => {
    return await bcrypt.hash(plain, saltRounds)
};
