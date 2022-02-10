const CREATE_MANUFACTURES = `
    CREATE TABLE IF NOT EXISTS "Manufactures" (
        id SERIAL PRIMARY KEY NOT NULL,
        manufacture VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )`;

module.exports = CREATE_MANUFACTURES