const { User, Car } = require('../models')

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
    const userAndCars = await User.findById(req.params.id, {
      include: [{ model: Car, as: 'cars' }]
    })
    res.send(userAndCars)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserProfiles,
  GetUserProfile
}
