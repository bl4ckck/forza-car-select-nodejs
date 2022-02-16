const { userModel } = require("../models");

const bcrypt = require("bcrypt");
const { checkData } = require("../utils");
const saltRounds = 10;

exports.register = async (req, res, next) => {
    try {
        const { password } = req.body;
        const hash = await bcrypt.hash(password, saltRounds);

        const bodyData = {
            role: undefined,
            email: undefined,
            password: undefined,
            name: undefined,
            ...req.body,
        };

        bodyData.password = hash;

        console.log(bodyData);

        checkData(bodyData)
            .then(async (getBody) => {
                const data = (await userModel.createUser(getBody)) ?? {};

                res.status(201).json({
                    message: "POST request to /users",
                    data,
                });
            })
            .catch((err) => {
                next(err);
            });        
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        console.log("sukses")
        console.log(req.session)
        res.send({data:"sukses"}) 
    } catch (error) {
        next("awe");
    }
};
