const controller = require('../controllers/UserController')
const Router = require('express').Router()

Router.get('/', controller.GetAllUserProfiles)
Router.get('/:id', controller.GetUserProfile)
Router.get('/:id/book', controller.GetUserBookings)

module.exports = Router
