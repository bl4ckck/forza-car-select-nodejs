const { db } = require('../config/');
const USERS = require('./users')
const MANUFACTURES = require('./manufactures')
const CARS = require('./cars')

const CREATE_TABLES = [
    USERS,
    MANUFACTURES,
    CARS
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