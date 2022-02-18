const { People, User } = require("../models");

/**
 * API
 */
exports.insertCar = (req, res, next) => {
    const bodyData = {
        manufacture_id: undefined,
        name: undefined,
        image: undefined,
        year: undefined,
        ...req.body,
    };

    checkData(bodyData)
        .then(async (getBody) => {
            console.log(getBody);
            const data = (await carModel.createCar(getBody)) ?? {};

            res.status(201).json({
                message: "POST request to /peoples",
                data,
            });
        })
        .catch((err) => {
            next(err);
        });
};

exports.findAllPeople = async (req, res, next) => {
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
};
exports.findAllPeopleUser = async (req, res, next) => {
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
};

exports.findOnePeople = async (req, res, next) => {
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
};
exports.findOnePeopleUser = async (req, res, next) => {
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
        console.log(error);
        next(error);
    }
};

exports.updatePeople = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = (await People.update(req.body, { where: { id } })) ?? {};

        res.status(201).json({
            message: "PUT request to /peoples/:id",
            status: data[0] === 1 ? "success" : "no updated data",
            data: req.body,
        });
    } catch (error) {
        next(error);
    }
};

exports.deletePeople = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data =
            (await People.destroy({
                where: { id },
            })) ?? {};

        res.status(200).json({
            message: "DELETE request to /peoples/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};
