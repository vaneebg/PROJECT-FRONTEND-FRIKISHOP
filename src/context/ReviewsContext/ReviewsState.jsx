import { useReducer,createContext } from "react"
import axios from 'axios'
import ReviewsReducer from './ReviewsReducer'

const token = JSON.parse(localStorage.getItem('token'))

const initialState={
    token: token ? token : null,
    reviews:[]
}

export const ReviewsContext = createContext(initialState)

const API_URL = "http://localhost:8080";

export const ReviewsProvider = ({children}) => {

    const [state,dispatch] = useReducer(ReviewsReducer,initialState)

 
    const getReview = async(produ)=>{
       
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.get(API_URL + '/reviews/review_product/id/' + produ,{
            headers:{
                authorization:token,
            }
        }
        )
        dispatch({
            type:'GET_REVIEW_BY_ID',
            payload:res.data.Reviews
        })
    }

    const createReview = async(review)=>{
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.post(API_URL + '/reviews' ,review,{
            headers:{
                authorization:token
            }
        })
        dispatch({
            type:'CREATE_REVIEW',
            payload:res.data.newReview
        })
    }


  return (<ReviewsContext.Provider
    value={{
        reviews:state.reviews,
        getReview,
        createReview
    }}
    >
        {children}
    </ReviewsContext.Provider>
  )
}