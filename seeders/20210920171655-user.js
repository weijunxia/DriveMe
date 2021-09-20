'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Brandon David',
          email: 'jmall@mail.com',
          password_digest: 'password123',
          picture:
            'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
          is_owner: true,
          is_renter: false
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
