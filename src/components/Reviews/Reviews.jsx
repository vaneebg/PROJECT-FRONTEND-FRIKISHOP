import React, { useState } from 'react'
import { useContext } from 'react'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'

const Reviews = () => {

  const { createReview, reviews,id, modifyReview } = useContext(ReviewsContext)
  // const { user } = useContext(UserContext)

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
    createReview({ProductId:id, title, score, body })
  }



  const listProducts = reviews.map((el, i) => {
    return (
      <div>
        <div key={i}>
          <span>Título:{el.title}</span><br />
          <span>Puntuacíon:{el.score}</span><br />
          <span>Review:{el.body}</span>
        </div>
      </div>
    )
  })



  return (
    <div className="review" >
      {listProducts}
      <div>
        <form action="" >
          <span>Título review:</span><br />
          <input type="text" onChange={handleInputchange2} /><br />
          <span>Puntuación:</span> <br />
          <input type="number" max={"10"} min={"0"} onChange={handleInputchange3} /><br />
          <span>Review:</span><br />
          <input type="text" onChange={handleInputchange4} /><br />
          <button onClick={createRevie} />
        </form>
      </div>
    </div>
  )
}
export default Reviews