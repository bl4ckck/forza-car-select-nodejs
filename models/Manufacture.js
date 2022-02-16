const { db } = require("../config");

class Manufacture {
    static async findAll() {
        const { rows } = await db.query(
            `SELECT * FROM "Manufactures" ORDER BY id DESC`
        );

        return rows;
    }
    static async findOne(params) {
        const { rows } = await db.query(`
            SELECT * FROM "Manufactures"
            WHERE id = ${params}
        `);

        return rows[0];
    }
    static async createManufacture(params) {
        const { rows } = await db.query(`
            INSERT INTO "Manufactures"(manufacture)
            VALUES ('${params.manufacture}')
            RETURNING *
        `);

        return rows[0];
    }
    static async updateManufacture(id, params) {
        let queryString = "";
        for (const props in params) {
            queryString += `${props} = '${params[props]}',`;
        }

        const { rows } = await db.query(`
            UPDATE "Manufactures"
            SET ${queryString}
                updated_at = NOW()
            WHERE id=${id}  
            RETURNING *
        `);

        return rows[0];
    }
    static async deleteManufacture(id) {
        const { rows } = await db.query(`
            DELETE FROM "Manufactures"
            WHERE id=${id}  
            RETURNING *
        `);

        return rows[0];
    }
}

module.exports = Manufacture