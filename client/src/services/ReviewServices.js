import Client from './api'

export const GetAllReviewsByCar = async (carId) => {
  try {
    const res = await Client.get(`/${carId}/reviews`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllReviewsByUser = async (userId) => {
  try {
    const res = await Client.get(`/${userId}/reviews`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostNewReview = async (data) => {
  try {
    console.log(data)
    const res = await Client.post('/reviews', data)
    return res.data
  } catch (error) {
    throw error
  }
}
