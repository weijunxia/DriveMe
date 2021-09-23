const { User, Car, Bookings, Review } = require('../models')

const GetAllUserProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndCars = await User.findByPk(req.params.id, {
      include: [{ model: Review }, { model: Car }]
    })
    console.log(req.params)
    res.send(userAndCars)
  } catch (error) {
    throw error
  }
}

const GetUserBookings = async (req, res) => {
  try {
    const userAndCars = await User.findByPk(req.params.id, {
      include: [{ model: Bookings }]
    })
    res.send(userAndCars)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserProfiles,
  GetUserProfile,
  GetUserBookings
}
