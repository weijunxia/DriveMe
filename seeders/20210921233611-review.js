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
          name: 'Carol',
          comment:
            'This was an amazing car and the host was extremely helpful. Will rent again'
        },
        {
          car_id: 1,
          user_id: 1,
          rating: 5,
          name: 'Wei',
          comment: 'I only drive teslas and this one was awesome.'
        },
        {
          car_id: 2,
          user_id: 2,
          name: 'Arty',
          rating: 4,
          comment:
            'This was truly compact which was only downside.super nice and clean still'
        },
        {
          car_id: 2,
          user_id: 2,
          name: 'Jae',
          rating: 4,
          comment: 'Small car but gets the job done and the host was super nice'
        },
        {
          car_id: 3,
          user_id: 3,
          name: 'Ray',
          rating: 5,
          comment: 'This was an amazing car! This is really luxury'
        },
        {
          car_id: 3,
          user_id: 3,
          name: 'Marshall',
          rating: 5,
          comment: 'After driving this sweet ride. I may need my own Tesla'
        },
        {
          car_id: 4,
          user_id: 4,
          name: 'Ashley',
          rating: 4,
          comment: 'This was a very smooth rental experience. Loved it'
        },
        {
          car_id: 4,
          user_id: 4,
          name: 'Joey',
          rating: 5,
          comment: 'Love the model S. Would rent again for sure'
        },
        {
          car_id: 5,
          user_id: 4,
          name: 'Andrew',
          rating: 5,
          comment:
            'Wow i never thought i would get to try this car. I am beyond satisfied'
        },
        {
          car_id: 5,
          user_id: 4,
          name: 'Sam',
          rating: 5,
          comment: 'THIS CAR IS A BEAST !!!! I LOVE IT'
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews')
  }
}
