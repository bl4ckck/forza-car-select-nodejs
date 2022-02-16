const { manufactureModel } = require('../models');
const { checkData } = require('../utils');

/** 
 * API
*/
exports.insertManufacture = (req, res, next) => {
    const bodyData = {
        manufacture: undefined,
        ...req.body,
    };

    checkData(bodyData)
        .then(async (getBody) => {
            console.log(getBody);
            const data = await manufactureModel.createManufacture(getBody) ?? {};

            res.status(201).json({
                message: "POST request to /manufactures",
                data,
            });
        })
        .catch((err) => {
            next(err);
        });
};

exports.findAllManufacture = async (req, res, next) => {
    try {
        console.log("manumanu")
        console.log(req.cookies)
        console.log(req.session)
        const data = await manufactureModel.findAll() ?? {};

        res.status(200).json({
            message: "GET request to /manufactures",
            data,
        });        
    } catch (error) {
        next(error);
    }
};

exports.findOneManufacture = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await manufactureModel.findOne(id) ?? {};

        res.status(200).json({
            message: "GET request to /manufactures/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.updateManufacture = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await manufactureModel.updateManufacture(id, req.body) ?? {};
        console.log(req.body);
        console.log(id);

        res.status(201).json({
            message: "PUT request to /manufactures/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteManufacture = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await manufactureModel.deleteManufacture(id) ?? {};

        res.status(200).json({
            message: "DELETE request to /manufactures/:id",
            data,
        });
    } catch (error) {
        next(error);
    }
};