const { readFile, writeFile } = require("fs/promises");
const { db } = require("../config");
const DATA_PATH_CARS = "./config/cars.json"
const DATA_PATH_GARAGE = "./config/garage.json"

class Car {
    static async testFindAll() {
        const data = await db.query(`SELECT * FROM "Cars"`);
        console.log(data)

        return data.rows;
    }
    static async findAll(type) {
        const data_path = type === "car" ? DATA_PATH_CARS : DATA_PATH_GARAGE;

        const { data } = JSON.parse(await readFile(data_path, "utf8"));

        return data;
    }
    static async findOne(type, params) {
        const data_path = type === "car" ? DATA_PATH_CARS : DATA_PATH_GARAGE;

        const { data } = JSON.parse(await readFile(data_path, "utf8"));

        return data[params];
    }
    static async addCarGarage(params) {
        const carData = JSON.parse(await readFile(DATA_PATH_CARS, "utf8")).data;
        let { data } = JSON.parse(await readFile(DATA_PATH_GARAGE, "utf8"));

        data.unshift(carData[params]);
        await writeFile(DATA_PATH_GARAGE, JSON.stringify({ data }), "utf8");

        return carData[params];
    }
}

module.exports = Car;