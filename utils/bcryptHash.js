const bcrypt = require("bcrypt");
const saltRounds = 12;

exports.hash = async (plain) => {
    return await bcrypt.hash(plain, saltRounds)
};
