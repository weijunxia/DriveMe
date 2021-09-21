const router = require('express').Router()
const controller = require('../controllers/CarController')
const middleware = require('../middleware')

router.get('/', controller.GetCars)
router.get('/:id', controller.GetCarProfile)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCar
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCar
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCar
)

module.exports = router
