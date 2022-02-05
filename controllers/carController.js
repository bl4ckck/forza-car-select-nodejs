const { carModel } = require('../models');

/** 
 * VIEWS
*/
exports.homeView = async (req, res) => {
    const data = await carModel.findAll("car");

    res.render("index", {
        page: "home",
        props: {
            data
        },
    });
};
exports.garageView = async (req, res) => {
    const data = await carModel.findAll("garage");

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
    const data = await carModel.findAll("car");

    res.status(200).json({
        message: "GET request to /cars",
        data
    });
};
exports.findOneCar = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.findOne("car", id);

    res.status(200).json({
        message: "GET request to /cars/:id",
        data
    });
};

exports.findAllCarGarage = async (req, res) => {
    const data = await carModel.findAll("garage");

    res.status(200).json({
        message: "GET request to /garage/cars",
        data,
    });
};
exports.findOneCarGarage = async (req, res) => {
    const { id } = req.params;
    const data = await carModel.findOne("garage", id);

    res.status(200).json({
        message: "GET request to /garage/cars/:id",
        data,
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
