const reqBody = (req, res, next) => {
    if (Object.keys(req.body).length === 0)
        return res.status(200).send({
            code: "400",
            status: "Request body is empty",
        });
    next();
};

module.exports = reqBody;