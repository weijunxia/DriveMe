const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CarRouter = require('./CarRouter')
const AuthRouter = require('./AuthRouter')
const BookingRouter = require('./BookingsRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/users', UserRouter)
Router.use('/cars', CarRouter)
Router.use('/auth', AuthRouter)
Router.use('/bookings', BookingRouter)
Router.use('/reviews', ReviewRouter)
module.exports = Router
