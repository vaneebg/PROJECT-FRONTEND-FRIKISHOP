import React, { useState } from 'react'
import { useContext } from 'react'
import { ReviewsContext } from '../../context/ReviewsContext/ReviewsState'
import './Reviews.scss'

const Reviews = () => {

  const { createReview, reviews, id } = useContext(ReviewsContext)


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
      alert('Escribe un título de al menos 5 carácteres')
    }
    if(score>10){
      alert('Score mayor de 10 no permitido')
    }
    if(body.length<5){
      alert('Escribe más cuerpo de revew')
    }
    else{
      createReview({ ProductId: id, title, score, body })
    }
  }

  const listProducts = reviews.map((el, i) => {

    return (
      <div className='reviewContt' key={i}>
        <span>Título:{el.title}</span><br />
        <span>Cuerpo:{el.body}</span><br />
        <span>Puntuacíon: {el.score}</span><br />
      </div>
    )
  })



  return (
    <div className="review" >
      {listProducts}
      <div>
        <form action="" >
          <div className="newrev">
            <span className='titlerev'>REVIEW NUEVA:</span><br />
            <span>Título:</span>
            <input className='circle' type="text" onChange={handleInputchange2} /><br />
            <span>Cuerpo:</span>
            <input className='circle' type="text" onChange={handleInputchange4} /><br />
            <div className="score">
            <span>Score:</span>
            <input className='number circle' type="number" max={10} min={0} onChange={handleInputchange3} /><br />
            </div> 
            <input className='btnSub' type="submit" onClick={createRevie} />
          </div>
        </form>
      </div >
    </div >
  )
}
export default Reviews