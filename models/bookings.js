'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookings.init(
    {
      carId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      date_from: DataTypes.DATE,
      date_to: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Bookings',
      tableName: 'bookings'
    }
  )
  return Bookings
}
