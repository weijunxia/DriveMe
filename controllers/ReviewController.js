const { Review } = require('../models')

const CreateReview = async (req, res) => {
  try {
    const book = await Review.create({ ...req.body })
    res.send(book)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const book = await Review.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(book)
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
  DeleteReview
}
