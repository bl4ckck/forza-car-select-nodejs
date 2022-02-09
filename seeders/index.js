const { db } = require('../config/');
const { INSERT_CARS } = require('./cars.seeder')
const { INSERT_MANUFACTURES } = require('./manufactures.seeder')

const INSERT_DATA = [INSERT_MANUFACTURES, INSERT_CARS];

//TODO: seeder & migration for garage
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