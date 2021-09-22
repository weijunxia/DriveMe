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
        },
        {
          car_id: 2,
          user_id: 2,
          date_from: '9/23/2021',
          date_to: '9/25/2021'
        },
        {
          car_id: 3,
          user_id: 3,
          date_from: '8/22/2021',
          date_to: '8/26/2021'
        },
        {
          car_id: 4,
          user_id: 4,
          date_from: '9/20/2021',
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
