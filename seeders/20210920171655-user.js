'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'teams',
      [
        {},
        {
          name: 'WIND',
          territory: 'Land of Blue Skies'
        },
        {
          name: 'WAVE',
          territory: 'Sea Towns'
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teams')
  }
}
