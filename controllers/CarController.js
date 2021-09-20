const { Car } = require('../models')

const GetCars = async (req, res) => {
  try {
    const cars = await Car.findAll()
    res.send(cars)
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
      { where: { id: req.params.car_id }, returning: true }
    )
    res.send(car)
  } catch (error) {
    throw error
  }
}

const DeleteCar = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.post_id } })
    res.send({ msg: 'Car Deleted', payload: req.params.car_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCars,
  CreateCar,
  UpdateCar,
  DeleteCar
}
