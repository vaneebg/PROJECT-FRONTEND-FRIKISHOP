import React from 'react'
import { useContext,useEffect } from 'react'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import { Link } from 'react-router-dom'
import './Reviews.scss'

const Reviews = () => {

    const { reviews,getReviews } = useContext(ReviewsContext)


    useEffect(() => {
        getReviews();
      }, []);
      
const listReviews=reviews.map(el=>el.Reviews.map(review=>{return <>
<span>Título review: {review.title}</span> <br />
<span>{review.body}</span>
<span>Puntuación: {review.score}</span></>}))

return(
  <div className="review">
    {listReviews}
  </div>
)
}
export default Reviews