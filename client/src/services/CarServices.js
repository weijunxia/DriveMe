import Client from './api'

export const GetCars = async () => {
  try {
    const res = await Client.get('/api/cars')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCarsById = async () => {
  try {
    const res = await Client.get('/cars/:car_id')
    return res.data
  } catch (error) {
    throw error
  }
}
