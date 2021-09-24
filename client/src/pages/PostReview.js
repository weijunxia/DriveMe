// import Form from 'react-bootstrap/Form'
// import React, { useState } from 'react'
// import { withRouter } from 'react-router-dom'
// import { PostNewReview } from './services/ReviewServices'

// function PostReview(props) {
//   const [reviewForm, setReviewForm] = useState({
//     name: '',
//     rating: '',
//     comment: '',
//     userId: props.userInfo.id,
//     carId: props.carProfile.id
//   })

//   const handleRevChange = (event) => {
//     setReviewForm({ ...reviewForm, [event.target.name]: event.target.value })
//   }

//   const handleRevSubmit = async (e, reviewForm) => {
//     e.preventDefault()
//     const res = await PostNewReview(reviewForm)
//   }

//   return (
//     <div className="post_car">
//       <div>
//         <div className="form_wrapper2">
//           <h2 className="title_post_car"> Post Your Review</h2>
//           <Form onSubmit={handleRevSubmit}>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="string"
//                 placeholder="Your Name"
//                 onChange={handleRevChange}
//                 value={reviewForm.name}
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Rating </Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Rate your rental experience from 1-5"
//                 type="number"
//                 rows={1}
//                 onChange={handleRevChange}
//                 value={reviewForm.rating}
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Comment </Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Tell us more about your rental experience"
//                 rows={1}
//                 onChange={handleRevChange}
//                 value={reviewForm.comment}
//               />
//             </Form.Group>
//             <button type="submit">SUMBIT</button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default withRouter(PostReview)
