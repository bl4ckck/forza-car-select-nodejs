const CREATE_GARAGES = `
  CREATE TABLE IF NOT EXISTS "Garages" (
    id SERIAL PRIMARY KEY NOT NULL,
    car_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_car
        FOREIGN KEY(car_id)
        REFERENCES "Cars"(id)
  )`;

module.exports = CREATE_GARAGES