const { Car, Bookings, Review } = require('../models')
const AWService = require('../client/src/components/UploadImageToS3WithReactS3')

const GetCars = async (req, res) => {
  try {
    const cars = await Car.findAll()
    res.send(cars)
  } catch (error) {
    throw error
  }
}

const GetCarProfile = async (req, res) => {
  try {
    const carAndBooks = await Car.findByPk(req.params.id, {
      include: [{ model: Bookings }, { model: Review }]
    })
    res.send(carAndBooks)
  } catch (error) {
    throw error
  }
}

const CreateCar = async (req, res) => {
  try {
    const car = await Car.create({ ...req.body })
    res.send(car)
  } catch (error) {
    throw error
  }
}

const UpdateCar = async (req, res) => {
  try {
    const car = await Car.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(car)
  } catch (error) {
    throw error
  }
}

const DeleteCar = async (req, res) => {
  try {
    await Car.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Car Deleted', payload: req.params.car_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCars,
  CreateCar,
  UpdateCar,
  DeleteCar,
  GetCarProfile
}
