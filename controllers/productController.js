const { readFile } = require("fs/promises");

exports.findAllProduct = async (req, res) => {
    const product = JSON.parse(await readFile("./models/product.json", "utf8"));

    res.status(200).json({
        message: "GET request to /product",
        data: product.data,
    });
};
exports.findAllProductView = async () => {
    const product = JSON.parse(await readFile("./models/product.json", "utf8"));

    return product.data
};

exports.findOneProduct = async (req, res) => {
    const product = JSON.parse(await readFile("./models/product.json", "utf8"));
    const { id } = req.params

    for (let i = 0; i < product.data.length; i++) {
        if (product.data[i].id === id) {
            return res.status(200).json({
                message: "GET request to /product/:id",
                data: product.data[i],
            });
        }
    }

    return res.status(404).json({
        message: "GET request to /product/:id not found!",
    });
};
