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
        },
        {
          user_id: 2,
          make: 'Tesla',
          model: 'Model Y',
          year: 2021,
          description:
            'ThIS Tesla Model Y is a compact all-electric luxury vehicle made by Tesla, Inc. The vehicle is more than enough to get any job done.',
          car_pic:
            'https://www.kbb.com/wp-content/uploads/2020/04/2020-tesla-model-y-front-3qtr-16x9-1.jpg?w=763',
          price: 100
        },
        {
          user_id: 3,
          make: 'Tesla',
          model: 'Model S Plaid',
          year: 2021,
          description:
            'This Tesla Model S Plaid is the creme de la dreme of Teslas. You will not find another Premium all electric sedan like it.',
          car_pic:
            'https://cdn.motor1.com/images/mgl/e2VeP/s1/2021-tesla-model-s.jpg',
          price: 300
        },
        {
          user_id: 4,
          make: 'Tesla',
          model: 'Model S',
          year: 2021,
          description:
            'This Tesla Model S Base still has that elite luxury feel. You will not regret renting this.',
          car_pic:
            'https://s1.cdn.autoevolution.com/images/news/elon-musk-says-400-mile-range-possible-for-tesla-model-s-redesign-140736-7.jpg',
          price: 300
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars')
  }
}
