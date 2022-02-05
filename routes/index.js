const express = require("express");
const router = express.Router();

const todo = require("./todoRoutes");
const product = require("./productRoutes");

router.use("/todo", todo);
router.use("/product", product);

module.exports = router;
