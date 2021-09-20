'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.User, { foreignKey: 'userId' })
      Car.hasMany(models.Bookings, { foreignKey: 'carId' })

      // define association here
    }
  }
  Car.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      car_pic: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars'
    }
  )
  return Car
}
