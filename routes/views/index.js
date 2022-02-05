const express = require("express");
const router = express.Router();
const {
    homeView,
    garageView
} = require("../../controllers").carController;

router.get("/", homeView)
router.get("/garage", garageView)

module.exports = router;
