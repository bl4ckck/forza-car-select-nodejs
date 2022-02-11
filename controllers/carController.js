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
exports.insertCar = (req, res, next) => {
    const checkData = new Promise((resolve, reject) => {
        const getBody = {
            manufacture_id: undefined,
            name: undefined,
            image: undefined,
            year: undefined,
            ...req.body,
        };

        Object.values(getBody).forEach(value => {
            if (value === undefined) {
                reject("One of request body is empty");
            }
        });

        resolve(getBody); 
    })

    checkData
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
    })
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

exports.findAllCarGarage = async (req, res, next) => {
    try {
        const data = await carModel.findAll() ?? {};

        res.status(200).json({
            message: "GET request to /garage/cars",
            data,
        });
    } catch (error) {
        next(error);
    }
};
exports.findOneCarGarage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await carModel.findOne(id) ?? {};

        res.status(200).json({
            message: "GET request to /garage/cars/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
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
