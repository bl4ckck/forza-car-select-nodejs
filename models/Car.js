const { db } = require("../config");

//TODO: Change the name of the table to 'Students', 'Users', Enum Role, etc... 
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
    static async updateCar(id, params) {
        let queryString = "";
        for (const props in params) {
            queryString += `${props} = '${params[props]}',`;
        }

        const { rows } = await db.query(`
            UPDATE "Cars"
            SET ${queryString}
                updated_at = NOW()
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
}

module.exports = Car;