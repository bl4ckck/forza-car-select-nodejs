const { db } = require('../config/');
const MANUFACTURES = require('./manufactures')
const CARS = require('./cars')
const GARAGES = require('./garages')

const CREATE_TABLES = [
    MANUFACTURES, 
    CARS, 
    GARAGES
];

const migrations = async () => {
    try {
        for (let i = 0; i < CREATE_TABLES.length; i++) {
            await db.query(CREATE_TABLES[i]);
        }
    } catch (error) {
        console.log(error);
    }
}

migrations()