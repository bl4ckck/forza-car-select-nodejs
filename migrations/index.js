const { db } = require('../config/');
const { CREATE_CARS } = require('./cars')
const { CREATE_MANUFACTURES } = require('./manufactures')

const CREATE_TABLES = [CREATE_MANUFACTURES, CREATE_CARS];

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