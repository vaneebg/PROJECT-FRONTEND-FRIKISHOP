import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import { UserContext } from '../../context/UserContext/UserState'

const Reviews = () => {

  const { products } = useContext(ProductsContext)
  const { createReview} = useContext(ReviewsContext)
  const { user } = useContext(UserContext)

 
  const [title, setTitle] = useState('')
  const [score, setScore] = useState(0)
  const [body, setBody] = useState('')

  const listProducts = products.map((product, i) => {
   const listReviews=  product.Reviews.map((el, i) => {
      const ProductId = el.id
      const handleInputchange2 = (event) => {
        setTitle(event.target.value)
      }
      const handleInputchange3 = (event) => {
        setScore(event.target.value)
      }
      const handleInputchange4 = (event) => {
        setBody(event.target.value)
      }
      const modify = (e) => {
        e.preventDefault()
        createReview({ ProductId, title, score, body })
      }
      return (
        <div className='review' key={i}>
          {user.id == el.UserId ?
            <div key={i}>
              <form action="" >
                <span>Título review:</span><br />
                <input type="text" onChange={handleInputchange2} placeholder={el.title} /><br />
                <span>Puntuación:</span> <br />
                <input type="number" max={"10"} min={"0"} onChange={handleInputchange3} placeholder={el.score} /><br />
                <span>Review:</span><br />
                <input type="text" onChange={handleInputchange4} placeholder={el.body} /><br />
                <button onClick={modify} />
              </form>
            </div> :
            <div key={i}>

              <span>Título:{el.title}</span><br />
              <span>Puntuacíon:{el.score}</span><br />
              <span>Review:{el.body}</span>
            </div>
          }
        </div>
      )
    }
    )
    return(
    {listReviews}
    )
  })
  return (
    <div className="review" >
      <h1>EEE</h1>
      {listProducts}
    </div>
  )
}
export default Reviews