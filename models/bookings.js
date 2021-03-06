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
      Bookings.belongsTo(models.User, { foreignKey: 'userId' })
      Bookings.belongsTo(models.Car, { foreignKey: 'carId' })
      // define association here
    }
  }
  Bookings.init(
    {
      carId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'cars',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date_from: DataTypes.DATEONLY,
      date_to: DataTypes.DATEONLY
    },
    {
      sequelize,
      modelName: 'Bookings',
      tableName: 'bookings'
    }
  )
  return Bookings
}
