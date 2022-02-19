const { User, People, sequelize } = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 12;

class AuthController {
    /**
     * Authenticate User Section
     */
    static register = async (req, res, next) => {
        const { redirect } = req.query;
        const { password } = req.body;

        try {
            // Transaction for creating user and people
            const data = await sequelize.transaction(async (t) => {
                const hash = await bcrypt.hash(password, saltRounds);
                // Data People
                const dataPeople = {
                    UserId: req.body.UserId,
                    name: req.body.name,
                    avatar: req.body.avatar,
                    phone: req.body.phone,
                    address: req.body.address,
                };
                // Data User
                const dataUser = {
                    roles: req.body.roles,
                    email: req.body.email,
                    password: req.body.password,
                };
                // Do create query for User
                const userCreate = await User.create(
                    {
                        ...dataUser, // Origin data
                        password: hash, // Hashing password
                    },
                    { transaction: t }
                );
                // Do create query for People
                const peopleCreate = await People.create(
                    {
                        ...dataPeople,
                        UserId: userCreate.get("id"), // Set UserId for People
                    },
                    { transaction: t }
                );

                return { ...userCreate.dataValues, ...peopleCreate.dataValues };
            });

            // Check if request is from web
            if (redirect) return res.redirect("/login");
            // Response in API
            res.status(201).json({
                message: "POST request to /auth/register",
                data
            });
        } catch (error) {
            if (redirect)
                return res.redirect("/register?error=failed+to+register");
            next(error);
        }

    }
    static login = (req, res, next) => res.send({ message: "Login success", data: req.session.passport });
    static logout(req, res, next) {
        req.session = null;
        res.redirect(req.get("referer"));
    }
    /**
     * User Repository Section
     */
    static findAllUsers = async (req, res, next) => {
        try {
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
    }
    static findOneUser = async (req, res, next) => {
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
    }
    static updateUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const { password } = req.body;
            // Check if passowrd request is exist, then hash it
            if (password) {
                req.body.password = await bcrypt.hash(password, saltRounds);
            }
    
            const data = await User.update(req.body, { where: { id } });

            res.status(201).json({
                message: "PUT request to /users/:id",
                status: data[0] === 1? "success" : "no updated data",
                data: req.body,
            });
        } catch (error) {
            next(error);
        }
    }
    static deleteUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await User.destroy({ where: { id } });
    
            res.status(200).json({
                message: "DELETE request to /users/:id",
                data,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;
