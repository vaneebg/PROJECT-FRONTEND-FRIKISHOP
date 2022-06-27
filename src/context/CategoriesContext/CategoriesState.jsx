import { createContext, useReducer } from "react";
import axios from 'axios'
import CategoriesReducer from './CategoriesReducer'



const initialState = {
    categories:[]
   
}

const API_URL = "http://localhost:8080";

export const CategoriesContext = createContext(initialState)

export const CategoriesProvider = ({children}) =>{
    const [state,dispatch] = useReducer(CategoriesReducer,initialState)

   

    const getAllCateg = async(user)=>{
        const res = await axios.get(API_URL + '/categories/')
      console.log("aquiiii",res)
        dispatch({
            type:'GET_ALL_CAT',
            payload:res.data
        })

    }



    return (
        <CategoriesContext.Provider
        value={{
            categories:state.categories,
          getAllCateg
        }}
        >
            {children}
        </CategoriesContext.Provider>
    )

}