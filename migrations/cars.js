exports.CREATE_CARS = `
  CREATE TABLE IF NOT EXISTS "Cars" (
    id SERIAL PRIMARY KEY NOT NULL,
    manufacture_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    year VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_manufacture
        FOREIGN KEY(manufacture_id) 
        REFERENCES "Manufactures"(id)
  )`;