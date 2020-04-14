const express = require("express")

const cars = require('./car-model')

const router = express.Router()

router.get('/', (req, res) => {
    cars.getAll()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve cars" })
        })
})

router.post('/', (req, res) => {
    cars.addCar(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add a car"})
        })
})

module.exports = router;