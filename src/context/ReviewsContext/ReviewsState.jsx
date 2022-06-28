import { useReducer,createContext } from "react"
import axios from 'axios'
import ReviewsReducer from './ReviewsReducer'

const token = JSON.parse(localStorage.getItem('token'))

const initialState={
    token: token ? token : null,
    reviews:[],
    review:{},
    id:[]
}

export const ReviewsContext = createContext(initialState)

const API_URL = "http://localhost:8080";

export const ReviewsProvider = ({children}) => {

    const [state,dispatch] = useReducer(ReviewsReducer,initialState)

 
    const getReview = async(id)=>{
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.get(API_URL + '/reviews/review_product/id/' + id,{
            headers:{
                authorization:token,
            }
        }
        )
        dispatch({
            type:'GET_REVIEW_BY_ID',
            payload:res.data.Reviews,
            payload2:id
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

    const modifyReview = async(reviewId)=>{
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.put(API_URL + '/reviews/id/' + reviewId,{
            headers:{
                authorization:token
            }
        })
        dispatch({
            type:'MODIFY_REVIEW',
            payload:res.data
        })
    }


  return (<ReviewsContext.Provider
    value={{
        reviews:state.reviews,
        review:state.review,
        id:state.id,
        getReview,
        modifyReview,
        createReview
    }}
    >
        {children}
    </ReviewsContext.Provider>
  )
}