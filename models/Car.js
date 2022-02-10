const { readFile, writeFile } = require("fs/promises");
const { db } = require("../config");
const DATA_PATH_CARS = "./config/cars.json"
const DATA_PATH_GARAGE = "./config/garage.json"

class Car {
    static async findAll() {
        const { rows } = await db.query(
            `SELECT * FROM "Cars" ORDER BY id DESC`
        );

        return rows;
    }
    static async findAllCarManufacture() {
        const { rows } = await db.query(`
            SELECT C.id, manufacture_id, M.manufacture, name, image, year FROM "Cars" C
            INNER JOIN "Manufactures" M
                    ON M.id = C.manufacture_id
            ORDER BY C.id DESC
        `);

        return rows;
    }
    static async findOne(params) {
        const { rows } = await db.query(`
            SELECT * FROM "Cars"
            WHERE id = ${params}
        `);

        return rows[0];
    }
    static async findOneCarManufacture(params) {
        const { rows } = await db.query(`
            SELECT C.id, manufacture_id, M.manufacture, name, image, year FROM "Cars" C
            INNER JOIN "Manufactures" M
                    ON M.id = C.manufacture_id
            WHERE C.id = ${params}
        `);

        return rows[0];
    }
    static async createCar(params) {
        const { rows } = await db.query(`
            INSERT INTO "Cars"(manufacture_id, name, image, year)
            VALUES (${params.manufacture_id}, '${params.name}', '${params.image}', '${params.year}')
            RETURNING *
        `);

        return rows[0];
    }
    //TODO: update & delete Car
    static async updateCar(id, params) {
        // let queryString = ""
        // const objParams = Object.keys(params)
        // objParams.forEach((value, id) => {
        //     queryString = queryString + `${value} = '${params[value]}'${id < objParams.length - 1 ? "," : ""}`;
        // })

        // console.log("queryString: ",coba);
        // const { rows } = await db.query(`
        //     UPDATE "Cars"
        //     SET ${queryString}
        //     WHERE id=${id}  
        //     RETURNING *
        // `);

        // return rows[0];
        let queryString = "";
        for (const props in params) {
            queryString += `${props} = '${params[props]}',`;
        }

        const { rows } = await db.query(`
            UPDATE "Cars"
            SET ${queryString.slice(0, -1)}
            WHERE id=${id}  
            RETURNING *
        `);

        return rows[0];
    }
    static async deleteCar(id) {
        const { rows } = await db.query(`
            DELETE FROM "Cars"
            WHERE id=${id}  
            RETURNING *
        `);

        return rows[0];
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