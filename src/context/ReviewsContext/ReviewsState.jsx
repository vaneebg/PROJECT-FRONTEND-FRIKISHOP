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

    const getReviews = async() =>{
        const token = JSON.parse(localStorage.getItem('token'))
            const res = await axios.get(API_URL + '/reviews/review_product',{
                headers:{
                    authorization:token,
                }
            })
            console.log("aquii",res.data)
            dispatch({
                type:'GET_ALL_REVIEWS',
                payload:res.data
            })
    }
    const getReview = async(produ)=>{
        console.log('hola')
        console.log('soy produ',produ)
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.get(API_URL + '/reviews/review_product/id/' + produ,{
            headers:{
                authorization:token,
            }
        }
        )
        console.log('res.data',res.data.Reviews)
        dispatch({
            type:'GET_REVIEW_BY_ID',
            payload:res.data.Reviews
        })
    }


  return (<ReviewsContext.Provider
    value={{
        reviews:state.reviews,
        getReviews,
        getReview
    }}
    >
        {children}
    </ReviewsContext.Provider>
  )
}