import { createContext } from "react";
import axios from 'axios';

const API_URL = "http://localhost:8080";

export const OrdersContext=createContext();

export const OrdersProvider=({children})=>{

 const createOrder=async(order)=>{
    console.log(order)
const token=JSON.parse(localStorage.getItem('token'))
try {
   const productId=order.map(element=>{return element.id})
//    console.log(listOrder)
    await axios.post(API_URL+'/orders',{ ProductId: productId},{
        headers:{
            authorization:token,
        }
    })
} catch (error) {
    console.error(error)
}
}
return(
    <OrdersContext.Provider 
    value={{
        createOrder,
    }}
    >
    {children}
    </OrdersContext.Provider>
)
}