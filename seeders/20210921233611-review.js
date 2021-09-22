'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'reviews',
      [
        {
          car_id: 1,
          user_id: 1,
          rating: 5,
          comment:
            'This was an amazing car and the host was extremely helpful. Will rent again'
        },
        {
          car_id: 2,
          user_id: 2,
          rating: 4,
          comment:
            'This was truly compact which was only downside.super nice and clean still'
        },
        {
          car_id: 3,
          user_id: 3,
          rating: 5,
          comment: 'This was an amazing car! This is really luxury'
        },
        {
          car_id: 4,
          user_id: 4,
          rating: 4,
          comment: 'This was a very smooth rental experience. Loved it'
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews')
  }
}
