import React from 'react'
import { useContext,useEffect } from 'react'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import './Reviews.scss'

const Reviews = () => {

    const { reviews,getReviews } = useContext(ReviewsContext)


    useEffect(() => {
        getReviews();
      }, []);
 console.log(reviews)     
const listReviews=reviews.map(el=>el.Reviews.map(review=>{return <>
<span>Id producto: {review.ProductId}</span><br/>
<span className='titleRev'>Título review: {review.title}</span> <br />
<span>{review.body}</span><br/>
<span>Puntuación: {review.score}</span><br/></>}))

return(
  <div className="review">
    {listReviews}
  </div>
)
}
export default Reviews