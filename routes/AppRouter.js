const router = require('express').Router()

const CarRouter = require('./CarRouter')

Router.use('/cars', CarRouter)

module.exports = Router
