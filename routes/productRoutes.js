const express = require("express");
const router = express.Router();
const { findAllProduct, findOneProduct } = require("../controllers/productController");

/*
 * GET
 */
router.get("/", findAllProduct);

/*
 * GET
 */
router.get("/:id", findOneProduct);

module.exports = router;
