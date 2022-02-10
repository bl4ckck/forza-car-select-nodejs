const { carModel } = require('../models');

/** 
 * VIEWS
*/
exports.homeView = async (req, res) => {
    const data = await carModel.findAll();

    res.render("index", {
        page: "home",
        props: {
            data
        },
    });
};
exports.garageView = async (req, res) => {
    const data = await carModel.findAll();

    res.render("index", {
        page: "garage",
        props: {
            data,
            isGarage: true
        },
    });
};

/** 
 * API
*/
exports.findAllCar = async (req, res) => {
    const data = await carModel.findAll();

    res.status(200).json({
        message: "GET request to /cars",
        data
    });
};
exports.findAllCarManufacture = async (req, res) => {
    const data = await carModel.findAllCarManufacture();

    res.status(200).json({
        message: "GET request to /cars/get/manufactures",
        data
    });
};
exports.findOneCar = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.findOne(id);

    res.status(200).json({
        message: "GET request to /cars/:id",
        data
    });
};
exports.findOneCarManufacture = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.findOneCarManufacture(id);

    res.status(200).json({
        message: "GET request to /cars/get/manufactures/:id",
        data,
    });
};

exports.findAllCarGarage = async (req, res) => {
    const data = await carModel.findAll();

    res.status(200).json({
        message: "GET request to /garage/cars",
        data,
    });
};
exports.findOneCarGarage = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.findOne(id);

    res.status(200).json({
        message: "GET request to /garage/cars/:id",
        data,
    });
};

exports.insertCar = async (req, res) => {
    const data = await carModel.createCar(req.body);

    res.status(201).json({
        message: "POST request to /cars",
        data
    });
};
exports.updateCar = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.updateCar(id, req.body);
    console.log(req.body)
    console.log(id)

    res.status(201).json({
        message: "PUT request to /cars/:id",
        data
    });
};
exports.deleteCar = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.deleteCar(id);

    res.status(200).json({
        message: "DELETE request to /cars/:id",
        data
    });
};

exports.createCarGarage = async (req, res) => {
    const data = await carModel.addCarGarage(req.body.id);
    console.log(req.body);

    res.status(200).json({
        message: "POST request to /cars",
        data
    });
};
exports.createCarGarageRedirect = async (req, res) => {
    await carModel.addCarGarage(req.body.id);
    console.log(req.body);

    res.redirect("/garage")
};
