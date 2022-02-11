const errorResponder = (error, req, res, next) => {
    return res.status(200).send({
        code: "400",
        message: error
    });
}
const failSafeHandler = (req, res, next) => {
    return res.status(200).send({ 
        code: "400",
        message: "Resource not found!" 
    });
}

module.exports = { 
    errorResponder,
    failSafeHandler
};