const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "testdb",
    password: "postgres",
    port: 5432,
});

pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

module.exports = {
    query: (text) => pool.query(text),
    queryParams: (text, params) => pool.query(text, params),
};
