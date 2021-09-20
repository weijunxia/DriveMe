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
    const userAndCars = await User.findByPk(req.params.id, {
      include: [{ model: Car }]
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
