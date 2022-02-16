const CREATE_MANUFACTURES = `
    CREATE TABLE IF NOT EXISTS "Users" (
        id SERIAL PRIMARY KEY NOT NULL,
        role CHAR(1) NOT NULL,
        email VARCHAR (50) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    )`;

module.exports = CREATE_MANUFACTURES