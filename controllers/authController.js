const { User, People, sequelize } = require("../models");

const bcrypt = require("bcrypt");
const { checkData } = require("../utils");
const saltRounds = 12;

exports.register = (req, res, next) => {
    const { redirect } = req.query;

    sequelize.transaction(async (t) => {
        try {
            const { password } = req.body;
            const hash = await bcrypt.hash(password, saltRounds);

            const dataPeople = {
                UserId: req.body.UserId,
                name: req.body.name,
                avatar: req.body.avatar,
                phone: req.body.phone,
                address: req.body.address,
            };

            const dataUser = {
                roles: req.body.roles,
                email: req.body.email,
                password: req.body.password,
            };
            dataUser.password = hash;
            console.log("user:", dataUser);
            
            const userCreate = await User.create(dataUser, {
                transaction: t,
            });

            dataPeople.UserId = userCreate.get("id");
            console.log("people:", dataPeople);

            await People.create(dataPeople, {
                transaction: t,
            });
            
            if (redirect)
                return res.redirect("/login");
            
            res.status(201).json({
                message: "POST request to /auth/register",
                data: { ...dataUser, ...dataPeople },
            });
        } catch (error) {
            if (redirect) return res.redirect("/register?error=failed+to+register");
            next(error);
        }
    })
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
exports.logout = async (req, res, next) => {
    console.log("logout");
    req.session = null;
    res.redirect(req.get("referer"));
};

exports.findAllUsers = async (req, res, next) => {
    try {
        console.log("manumanu");
        console.log(req.cookies);
        console.log(req.session);
        const data = await User.findAll({
            raw: true,
            order: [["id", "DESC"]],
        });

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
