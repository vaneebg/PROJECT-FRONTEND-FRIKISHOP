import React from 'react'
import { useContext, useEffect } from 'react'
// import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
// import './Reviews.scss'

const Reviews = () => {

  const { reviews,getReview } = useContext(ReviewsContext)
  // const { products } = useContext(ProductsContext)

  // console.log('soy reviews', reviews)

  useEffect(() => {
    getReview();
  }, []);

  // const listReviews = reviews.map((r) => {
  //   console.log('rrrrrrrrrrrrrrr', r)
  //   return (
  //     <>
  //       <span>Id producto: {r}</span><br />
  //       <span className='titleRev'>Título review: {r}</span> <br />
  //       <span>{r}</span><br />
  //       <span>Puntuación: {r}</span><br />
  //     </>
  //   )
  // })


  return (
    <div className="review" >
      {/* {listReviews} */}
         <span>Id producto: {reviews.id}</span><br />
         <span className='titleRev'>Título review: {reviews.title}</span> <br />
         <span>{reviews.body}</span><br />
         <span>Puntuación: {reviews.score}</span><br />
    </div>
  )
}
export default Reviews