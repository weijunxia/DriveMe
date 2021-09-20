const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CarRouter = require('./CarRouter')

Router.use('/users', UserRouter)
Router.use('/cars', CarRouter)

module.exports = Router
