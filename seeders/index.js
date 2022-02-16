const { db } = require('../config/');
const USERS = require('./users.seeder')
const CARS = require('./cars.seeder')
const MANUFACTURES = require('./manufactures.seeder')

const INSERT_DATA = [
    USERS,
    MANUFACTURES, 
    CARS
];

const seeders = async () => {
    try {
        for (let i = 0; i < INSERT_DATA.length; i++) {
            await db.query(INSERT_DATA[i]);
        }
    } catch (error) {
        console.log(error);
    }
}

seeders()