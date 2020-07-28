const db = require('../data/db-config.js')

function getAll() {
    return db('cars')
}

function addCar(car) {
    return db('cars').insert(car).returning('*')
}

module.exports = {getAll, addCar}