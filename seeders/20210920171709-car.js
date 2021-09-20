'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cars',
      [
        {
          user_id: 1,
          make: 'Tesla',
          model: 'Model X',
          year: 2021,
          description:
            'The Tesla Model X is a mid-size all-electric luxury crossover made by Tesla, Inc. The vehicle is notable in that it uses falcon-wing doors for passenger access.',
          car_pic:
            'https://www.newcartestdrive.com/wp-content/uploads/2021/02/2021_Tesla_Model-X_hero-610x400.jpg',
          price: 150
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars')
  }
}
