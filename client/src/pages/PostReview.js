import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { PostNewReview } from '../services/ReviewServices'

function PostReview(props) {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: '',
    comment: '',
    userId: props.userInfo.id,
    carId: props.carProfile.id
  })

  const handleRevChange = (event) => {
    setReviewForm({ ...reviewForm, [event.target.name]: event.target.value })
  }

  const handleRevSubmit = async (e, reviewForm) => {
    e.preventDefault()
    const res = await PostNewReview(reviewForm)
  }

  return (
    <div className="post_review">
      <div className="form_wrapper">
        <h2 className="title_signin">Post Your Review</h2>
        <form className="col">
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleRevChange}
              name="name"
              type="name"
              placeholder="Enter Your Name"
              value={reviewForm.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="rating">Rating</label>
            <input
              onChange={handleRevChange}
              type="number"
              name="rating"
              value={reviewForm.rating}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="comment">Comment</label>
            <input
              onChange={handleRevChange}
              type="name"
              name="comment"
              value={reviewForm.comment}
              required
            />
          </div>
          <button className="post_button" onClick={handleRevSubmit}>
            Post Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(PostReview)
