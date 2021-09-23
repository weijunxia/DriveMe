const { Review, Car } = require('../models')
const { Op } = require('sequelize')

const CreateReview = async (req, res) => {
  try {
    const book = await Review.create({ ...req.body })
    res.send(book)
  } catch (error) {
    throw error
  }
}

const GetAllReviewsOneCar = async (req, res) => {
  try {
    const id = req.params.car_id
    const reviews = await Review.findAll({
      include: [
        { model: Car, as: 'car' },
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password_digest']
          }
        }
      ],
      where: { album_id: id }
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const GetAllReviewsOneUser = async (req, res) => {
  try {
    const id = req.params.user_id
    const reviews = await Review.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: {
            exclude: ['password_digest']
          },
          where: { id: id }
        },
        { model: Car, as: 'car' }
      ]
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Review Deleted', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateReview,
  UpdateReview,
  DeleteReview,
  GetAllReviewsOneCar,
  GetAllReviewsOneUser
}
