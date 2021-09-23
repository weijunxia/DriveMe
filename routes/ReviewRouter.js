const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

router.get(
  '/album/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllReviewsOneCar
)

router.get(
  '/user/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllReviewsOneUser
)

module.exports = router
