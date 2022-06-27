import React from 'react'
import { useContext, useEffect } from 'react'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import './Reviews.scss'

const Reviews = () => {

  const { reviews,getReview } = useContext(ReviewsContext)


  useEffect(() => {
    getReview();
  }, []);

 


  return (
    <div className="review">
         <span>Id producto: {reviews.id}</span><br />
         <span className='titleRev'>Título review: {reviews.title}</span> <br />
         <span>Cuerpo review:{reviews.body}</span><br />
         <span>Puntuación: {reviews.score}</span><br />
    </div>
  )
}
export default Reviews