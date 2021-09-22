'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'userId' })
      Review.belongsTo(models.Car, { foreignKey: 'carId' })
      // define association here
    }
  }
  Review.init(
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
      name: DataTypes.STRING,
      rating: DataTypes.STRING,
      comment: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
