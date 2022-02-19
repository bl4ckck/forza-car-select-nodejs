const { People, User } = require("../models");

class PeopleController {
    static findAllPeople = async (req, res, next) => {
        try {
            const data = await People.findAll({
                raw: true,
                order: [["id", "DESC"]],
            });

            res.status(200).json({
                message: "GET request to /peoples",
                data,
            });
        } catch (error) {
            next(error);
        }
    }
    static findAllPeopleUser = async (req, res, next) => {
        try {
            const data = await People.findAll({
                include: [
                    {
                        model: User,
                        attributes: ["email", "roles"],
                    },
                ],
                raw: true,
                order: [["id", "DESC"]],
            });

            res.status(200).json({
                message: "GET request to /peoples/rel/users",
                data,
            });
        } catch (error) {
            next(error);
        }
    }
    static findOnePeople = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await People.findOne({
                where: { id },
            });

            res.status(200).json({
                message: "GET request to /peoples/:id",
                data,
            });
        } catch (error) {
            next(error);
        }
    }
    static findOnePeopleUser = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await People.findOne({
                include: [
                    {
                        model: User,
                        attributes: ["email", "roles"],
                    },
                ],
                raw: true,
                where: { id },
            });

            res.status(200).json({
                message: "GET request to /peoples/rel/users/:id",
                data,
            });
        } catch (error) {
            next(error);
        }
    }
    static updatePeople = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await People.update(req.body, { where: { id } });

            res.status(201).json({
                message: "PUT request to /peoples/:id",
                status: data[0] === 1 ? "success" : "no updated data",
                data: req.body,
            });
        } catch (error) {
            next(error);
        }
    }
    static deletePeople = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await People.destroy({ where: { id } });

            res.status(200).json({
                message: "DELETE request to /peoples/:id",
                data,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = PeopleController;
