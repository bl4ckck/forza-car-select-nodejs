const { carModel } = require('../models');
const { checkData } = require('../utils');

/** 
 * VIEWS
*/
exports.homeView = async (req, res) => {
    const data = await carModel.findAll();

    res.render("index", {
        page: "home",
        props: {
            data,
            menu: { home: true }
        },
    });
};
exports.garageView = async (req, res) => {
    const data = await carModel.findAll();

    res.render("index", {
        page: "garage",
        props: {
            data,
            menu: { student: true },
        },
    });
};

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
            const data = await carModel.createCar(getBody) ?? {};

            res.status(201).json({
                message: "POST request to /cars",
                data,
            });
        })
        .catch((err) => {
            next(err);
        });
};

exports.findAllCar = async (req, res, next) => {
    try {
        const data = await carModel.findAll() ?? {};

        res.status(200).json({
            message: "GET request to /cars",
            data,
        });        
    } catch (error) {
        next(error);
    }
};
exports.findAllCarManufacture = async (req, res, next) => {
    try {
        const data = await carModel.findAllCarManufacture() ?? {};

        res.status(200).json({
            message: "GET request to /cars/get/manufactures",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.findOneCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carModel.findOne(id) ?? {};

        res.status(200).json({
            message: "GET request to /cars/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};
exports.findOneCarManufacture = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carModel.findOneCarManufacture(id) ?? {};

        res.status(200).json({
            message: "GET request to /cars/get/manufactures/:id",
            data,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.updateCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carModel.updateCar(id, req.body) ?? {};
        console.log(req.body);
        console.log(id);

        res.status(201).json({
            message: "PUT request to /cars/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carModel.deleteCar(id) ?? {};

        res.status(200).json({
            message: "DELETE request to /cars/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};
