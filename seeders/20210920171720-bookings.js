'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'bookings',
      [
        {
          car_id: 1,
          user_id: 1,
          date_from: '9/21/2021',
          date_to: '9/22/2021'
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bookings')
  }
}
