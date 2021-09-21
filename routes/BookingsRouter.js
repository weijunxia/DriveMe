const router = require('express').Router()
const controller = require('../controllers/BookingController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBookings
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateBookings
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBookings
)

module.exports = router
