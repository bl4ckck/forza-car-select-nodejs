const { User } = require("../models");

const bcrypt = require("bcrypt");
const { checkData } = require("../utils");
const saltRounds = 12;

exports.register = async (req, res, next) => {
    try {
        const { password } = req.body;
        const hash = await bcrypt.hash(password, saltRounds);

        const bodyData = {
            roles: undefined,
            email: undefined,
            password: undefined,
            ...req.body,
        };
        bodyData.password = hash;
        console.log(bodyData);

        checkData(bodyData)
            .then(async (getBody) => {
                const data = (await User.create(getBody)) ?? {};

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
        next(error);
    }
};

exports.findAllUsers = async (req, res, next) => {
    try {
        console.log("manumanu");
        console.log(req.cookies);
        console.log(req.session);
        const data = await User.findAll();

        res.status(200).json({
            message: "GET request to /users",
            data,
        }); 
    } catch (error) {
        next(error);
    }
};

exports.findOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await User.findOne({
            where: { id }
        });

        res.status(200).json({
            message: "GET request to /users/:id",
            data,
        }); 
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        //TODO: If password is not match, then throw error
        const { id } = req.params;
        const { password } = req.body;

        if (password) {
            req.body.password = await bcrypt.hash(password, saltRounds);
        }
        const data = (await User.update(req.body, { where: { id } })) ?? {};

        res.status(201).json({
            message: "PUT request to /users/:id",
            status: data[0]===1? "success" : "no updated data",
            data: req.body,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data =
            (await User.destroy({
                where: { id },
            })) ?? {};

        console.log(data);
        res.status(200).json({
            message: "DELETE request to /users/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};
