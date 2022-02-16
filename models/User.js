const { db } = require("../config");

class User {
    static async findAll() {
        const { rows } = await db.query(
            `SELECT * FROM "Users" ORDER BY id DESC`
        );

        return rows;
    }
    static async findOne(params) {
        const { email } = params
        console.log(email)
        const { rows } = await db.query(`
            SELECT * FROM "Users"
            WHERE email = '${email}'
        `);

        return rows[0];
    }
    static async createUser(params) {
        const { rows } = await db.query(`
            INSERT INTO "Users"(role, email, password, name)
            VALUES (${params.role}, '${params.email}', '${params.password}', '${params.name}')
            RETURNING *
        `);

        return rows[0];
    }
    static async updateUser(id, params) {
        let queryString = "";
        for (const props in params) {
            queryString += `${props} = '${params[props]}',`;
        }

        const { rows } = await db.query(`
            UPDATE "Users"
            SET ${queryString}
                updated_at = NOW()
            WHERE id=${id}  
            RETURNING *
        `);

        return rows[0];
    }
    static async deleteUser(id) {
        const { rows } = await db.query(`
            DELETE FROM "Users"
            WHERE id=${id}  
            RETURNING *
        `);

        return rows[0];
    }
}

module.exports = User;