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
        console.log('h9oa')
        const token = JSON.parse(localStorage.getItem('token'))
            const res = await axios.get(API_URL + '/reviews/review_product/',{
                headers:{
                    authorization:token,
                }
            })
            console.log(res.data)
            dispatch({
                type:'GET_ALL_REVIEWS',
                payload:res.data
            })
    }


  return (<ReviewsContext.Provider
    value={{
        reviews:state.reviews,
        getReviews
    }}
    >
        {children}
    </ReviewsContext.Provider>
  )
}