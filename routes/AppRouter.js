const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CarRouter = require('./CarRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/cars', CarRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
