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
          is_owner: true
        },
        {
          name: 'Jennifer Lopez',
          email: 'jmall2@mail.com',
          password_digest: 'password123',
          picture:
            'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
          is_owner: true
        },
        {
          name: 'Brenda Smith',
          email: 'jmall9@mail.com',
          password_digest: 'password123',
          picture:
            'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
          is_owner: true
        },
        {
          name: 'Jeffrey Wang',
          email: 'jmall33@mail.com',
          password_digest: 'password123',
          picture:
            'https://img.freepik.com/free-icon/important-person_318-10744.jpg?size=338&ext=jpg',
          is_owner: true
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
