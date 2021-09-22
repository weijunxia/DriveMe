import Client from './api'

export const GetCars = async () => {
  try {
    const res = await Client.get('/cars')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCarsById = async () => {
  try {
    const res = await Client.get('/cars/:id')
    return res.data
  } catch (error) {
    throw error
  }
}
