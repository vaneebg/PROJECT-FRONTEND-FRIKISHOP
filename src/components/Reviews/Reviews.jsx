import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import { UserContext } from '../../context/UserContext/UserState'
import { Alert } from 'antd';

const Reviews = () => {

  const { products } = useContext(ProductsContext)
  const { createReview, reviews, id, modifyReview } = useContext(ReviewsContext)
  const { user } = useContext(UserContext)

  console.log('reviews', reviews)

  const [title, setTitle] = useState('')
  const [score, setScore] = useState(0)
  const [body, setBody] = useState('')

  const handleInputchange2 = (event) => {
    setTitle(event.target.value)
  }
  const handleInputchange3 = (event) => {
    setScore(event.target.value)
  }
  const handleInputchange4 = (event) => {
    setBody(event.target.value)
  }

  const createRevie = (e) => {
    e.preventDefault()
    if(title.length<5){
      alert('sss')
    }
    if(score>10){
      alert('aaa')
    }
    if(body.length<5){
      alert('introduce')
    }
    else{
      createReview({ ProductId: id, title, score, body })
    }
  }

  const listProducts = reviews.map((el, i) => {

    return (
      <div key={i}>
        <span>Título:{el.title}</span><br />
        <span>Puntuacíon:{el.score}</span><br />
        <span>Review:{el.body}</span><br /><br />
      </div>
    )
  })



  return (
    <div className="review" >
      {listProducts}
      <div>
        <form action="" >
          <div className="newrev">
            <span>REVIEW NUEVA:</span><br />
            <span>Título:</span>
            <input type="text" onChange={handleInputchange2} /><br />
            <span>Score:</span>
            <input type="number" max={10} min={0} onChange={handleInputchange3} /><br />
            <span>Review:</span>
            <input type="text" onChange={handleInputchange4} /><br />
            <input type="submit" onClick={createRevie} />
          </div>
        </form>
      </div >
    </div >
  )
}
export default Reviews