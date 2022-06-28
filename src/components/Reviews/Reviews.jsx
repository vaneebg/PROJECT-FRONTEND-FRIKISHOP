import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import { UserContext } from '../../context/UserContext/UserState'

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
  console.log(title)
  const createRevie = (e) => {
    e.preventDefault()
    createReview({ ProductId: id, title, score, body })
  }



  const listProducts = reviews.map((el, i) => {
    
  // const [title1,setTitle1 ] = useState(el.title) 
  // const [score1,setScore1 ] = useState(el.score) 
  // const [body1,setBody1 ] = useState(el.body) 
    return (
      <div>
<<<<<<< HEAD
        {/* {user.id == el.UserId ?
          <div>
            <div key={i}>
              <span>Título:{el.title}</span><br />
              <span>Puntuacíon:{el.score}</span><br />
              <span>Review:{el.body}</span>
            </div>
            <form action="" >
              <span>Título review:</span><br />
              <input type="text" onChange={setTitle1} value={title1}/><br />
              <span>Puntuación:</span> <br />
              <input type="number" max={"10"} min={"0"} onChange={setScore1} value={score1}/><br />
              <span>Review:</span><br />
              <input type="text" onChange={setBody1} value={body1}/><br />
              <input type="submit" onClick={modifyReview} />
            </form>
          </div>

          : */}
          <div key={i}>
            <span>Título:{el.title}</span><br />
            <span>Puntuacíon:{el.score}</span><br />
            <span>Review:{el.body}</span>
          </div>

        {/* } */}
=======
        <div key={i}>
          <span>Título:{el.title}</span><br />
          <span>Puntuacíon:{el.score}</span><br />
          <span>Review:{el.body}</span><br/><br/>
        </div>
>>>>>>> develop
      </div>
    )
  })



  return (
    <div className="review" >
      {listProducts}
      <div>
        <form  action="" >
          <div className="newrev">
          <span>REVIEW NUEVA:</span><br/>
          <span>Título review:</span><br />
          <input type="text" onChange={handleInputchange2} /><br />
          <span>Puntuación:</span> <br />
          <input type="number" max={"10"} min={"0"} onChange={handleInputchange3} /><br />
          <span>Review:</span><br />
          <input type="text" onChange={handleInputchange4} /><br />
<<<<<<< HEAD
          <input type="submit" onClick={createRevie} />
=======
          <input type='submit' className='reviewbtn' onClick={createRevie} />
        </div>
>>>>>>> develop
        </form>
      </div>
    </div>
  )
}
export default Reviews