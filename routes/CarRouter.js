const controller = require('../controllers/CarController')
const middleware = require('../middleware')
const router = require('express').Router()

router.get('/', controller.GetCars)
router.get('/:id', controller.GetCarProfile)
router.get('/search/:query', controller.QueryCars)

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
