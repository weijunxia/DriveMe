const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUserProfiles)
Router.get('/:id', controller.GetUserProfile)
Router.get('/:id/book', controller.GetUserBookings)

module.exports = Router
