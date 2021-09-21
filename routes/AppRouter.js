const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CarRouter = require('./CarRouter')
const AuthRouter = require('./AuthRouter')
const BookingRouter = require('./BookingsRouter')

Router.use('/users', UserRouter)
Router.use('/cars', CarRouter)
Router.use('/auth', AuthRouter)
Router.use('/bookings', BookingRouter)
module.exports = Router
