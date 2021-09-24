import Client from './api'

export const GetCars = async () => {
  try {
    const res = await Client.get('/cars')
    return res.data
  } catch (error) {
    throw error
  }
}

export const SearchCars = async (query) => {
  try {
    const res = await Client.get(`/cars/search/${query}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostNewCar = async (data) => {
  try {
    const res = await Client.post('/cars', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateCar = async (id, data) => {
  try {
    const res = await Client.put(`/cars/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteCar = async (id) => {
  try {
    const res = await Client.delete(`/cars/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetCarsById = async (id) => {
  try {
    const res = await Client.get(`/cars/${id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
