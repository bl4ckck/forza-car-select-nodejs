require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const { apiRoutes, viewRoutes } = require("./routes");

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/views"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(viewRoutes);
app.use("/api/v1", apiRoutes);

app.use((req, res, next) => {
    res.status(404).send({message: "Resource not found!"});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});

module.exports = app;
