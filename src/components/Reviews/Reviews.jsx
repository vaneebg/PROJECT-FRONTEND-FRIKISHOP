import React from 'react'
import { useContext,useEffect } from 'react'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import { Link } from 'react-router-dom'
import './Reviews.scss'

const Reviews = () => {

    const { reviews,getReviews } = useContext(ReviewsContext)

    console.log(reviews)

    useEffect(() => {
        getReviews();
      }, []);
    console.log(reviews)
    const reviewList = reviews.map((rev,i)=>{
      console.log('rev',rev.Reviews)

      const review = rev.Reviews.map((revi)=>{
        console.log('revi',revi)
        return(
          <div>
            <span>Title: {revi.title}</span><br />
            <span>User id: {revi.UserId}</span><br />
            <span>Score: {revi.score} point</span><br />
            <span>Review: {revi.body}</span>
          </div>
        )
      })

        return (
            <div key={i}>
                <span>Nombre del producto: {rev.name}</span><br />
                <span>Categoria: {rev.Categorie.name}</span><br />
                <span>{review}</span>
            </div>
        )
    })

  return (
    <div>{reviewList}</div>
  )
}

export default Reviews