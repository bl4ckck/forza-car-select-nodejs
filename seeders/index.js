const { db } = require('../config/');
const CARS = require('./cars.seeder')
const MANUFACTURES = require('./manufactures.seeder')
const GARAGES = require('./garages.seeder')

const INSERT_DATA = [
    MANUFACTURES, 
    CARS, 
    GARAGES
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