const router = require('express').Router()
const controller = require('../controllers/CarController')
const middleware = require('../middleware')

router.get('/', controller.GetCars)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCar
)
router.put(
  '/:car_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCar
)
router.delete(
  '/:car_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCar
)

module.exports = router
