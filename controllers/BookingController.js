const { Bookings } = require('../models')

const CreateBookings = async (req, res) => {
  try {
    const book = await Bookings.create({ ...req.body })
    res.send(book)
  } catch (error) {
    throw error
  }
}

const UpdateBookings = async (req, res) => {
  try {
    const book = await Bookings.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(book)
  } catch (error) {
    throw error
  }
}

const DeleteBookings = async (req, res) => {
  try {
    await Bookings.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Booking Deleted', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateBookings,
  UpdateBookings,
  DeleteBookings
}
