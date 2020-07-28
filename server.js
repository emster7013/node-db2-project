
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const carRouter = require("./car-router/car-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/cars', carRouter)


module.exports = server;