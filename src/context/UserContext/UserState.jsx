import { createContext, useReducer } from "react";
import axios from 'axios'
import UserReducer from './UserReducer'

const token = JSON.parse(localStorage.getItem('token'))
const role = JSON.parse(localStorage.getItem('role'))

const initialState = {
    token: token ? token : null,
    role:role ? role : null,
    user: null,
    message:''
}

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState)

export const UserProvider = ({children}) =>{
    const [state,dispatch] = useReducer(UserReducer,initialState)

    const login = async (user) =>{
        const res = await axios.post(API_URL + '/users/login',user)
        dispatch({
            type:'LOGIN',
            payload:res.data
        }) 

        if(res.data){
            localStorage.setItem('token',JSON.stringify(res.data.token))
            localStorage.setItem('role',JSON.stringify(res.data.user.role))

        }
    
    }

    const getUserInfo = async()=>{
        const token = JSON.parse(localStorage.getItem('token'))

        const res = await axios.get(API_URL + '/users/myInfo',{
            headers:{
                authorization:token,
            }
        })

        dispatch({
            type:'USER_INFO',
            payload:res.data
        })

        return res
        
    }

    const logout = async()=>{
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.delete(API_URL + '/users/logout',{
            headers:{
                authorization:token
            }
        })

        dispatch({
            type:'LOGOUT',
            payload:res.data
        })
        if(res.data){
            localStorage.removeItem('token')
            localStorage.removeItem('role')
        }
    } 

    const register = async(user)=>{
        const res = await axios.post(API_URL + '/users/',user)
      
        dispatch({
            type:'REGISTER',
            payload:res.data
        })

    }

    const clearMessage = async ()=>{
        dispatch({
            type:'CLEARMESSAGE'
        })
    }

    



    return (
        <UserContext.Provider
        value={{
            token:state.token,
            role:state.role,
            user:state.user,
            message:state.message,
            login,
            getUserInfo,
            logout,
            register,
            clearMessage
        }}
        >
            {children}
        </UserContext.Provider>
    )

}